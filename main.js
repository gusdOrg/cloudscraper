const FindFiles = require("node-find-files");
const { Signale } = require('signale');
const { PromisePool } = require('@supercharge/promise-pool');
const fs = require('fs');
const express = require("express")



const DataBase = require('./src/database');
const { utilsRegex, hostList, passList, userList } = require('./src/utils');


const app = express()
app.use(express.json())
const database = new DataBase()

const Debug = new Signale({
    scope: 'Coletor de logs',
    config: {
        displayTimestamp: true,
    }
})

var files = []


let status = {
    cookies: 0,
    senhas: 0,
    files: 0,
    keys: 0
}



var finder = new FindFiles({
    rootFolder: "F:\\novo3\\",

    filterFunction: (str, s) => (str.endsWith(`.txt`) || str.endsWith(".log")) && s.size / (1024 * 1024) < 10
});


const parseItem = (item) => {

    const regOption = /(.*)([\:\=] )(.*)$/s
    let lines = item.split("\n").map(l => l.trimEnd())
    let resp = {
        url: undefined,
        login: undefined,
        pass: undefined,
        type: "login"
    }

    lines.forEach(line => {
        if (!regOption.test(line)) {
            return;
        }
        let [_, key, sep, value] = line.match(regOption);
        key = key.toLowerCase();
        if (isIncludes(key, hostList)) {
            resp.url = value;
            return;
        }
        if (isIncludes(key, userList)) {
            resp.login = value;
            return;
        }
        if (isIncludes(key, passList)) {
            resp.pass = value;
            return;
        }
    })
    if (!resp.login || !resp.pass || !resp.url)
        return undefined;
    return resp;
}



const parseCookies = (cookies) => {
    return cookies.split('\n').filter(l => l.includes("\t") && l.split("\t").length > 5).map(l => {
        try {

            if (l.includes(":")) {
                l = l.split(':')[1]
            }
            l = l.trimEnd().split('\t')

            let [domain, hostOnly, path, httpOnly, expirationDate, name, value] = l
            if (name == undefined || value == undefined || domain == undefined)
                return undefined;

            name = name.trimStart()
            if (domain && domain.includes(' ')) {
                domain = domain.split(' ')[1]
            }


            return {
                type: "cookies",
                domain,
                name,
                value,
            }
        } catch (error) {
            Debug.log(error.message)
            return undefined;
        }
    }).filter(c => c);
}
const grabKeys = (data) => new Promise((res) => {


    let result = []
    for (api of utilsRegex) {
        if (api.pattern.test(data)) {
            try {
                result.push({
                    type: "api_key",
                    name: api.name,
                    key: api.pattern.exec(data)[0]
                })
            } catch (error) {

            }

        }
    }

    return res(result)
})
const grabPassword = (data) => new Promise((res) => {
    let items = data.split('====').map(parseItem).filter(e => e)

    return res(items);
})
const grabCookies = (data) => new Promise((res) => {
    let items = data.split('====').map(parseCookies).filter(e => e);

    return res(items[0]);
})

async function solverFiles() {
    if (files.length !== 0)
        return setTimeout(solverFiles, 1000)

    let dataArray = [...files];
    files = [];


    await PromisePool
        .withConcurrency(200)
        .for(dataArray)
        .handleError((e, file) => {
            Debug.error(file, e)
            fs.appendFileSync('errors.log', `${file} => ${e.message}\n`);
        })
        .process(async (file) => {
            let data = fs.readFileSync(file, 'utf8');
            status.files++;
            let hash = Buffer.from(file).toString('base64');
            let resLogins = await grabPassword(data).then(async r => {
                status.senhas += r.length
                await database.addLogins(r);
                return r;
            });
            let resCookies = await grabCookies(data).then(async r => {
                status.cookies += r.length
                await database.addCookies(r);
                return r;
            });
            let resKeys = await grabKeys(data).then(async r => {
                status.keys += r.length
                await database.addKeys(r);
                return r;
            });

            let result = [...resCookies, ...resLogins, ...resKeys]

            if (result.length > 0) {
                await database.addResult({
                    hash,
                    result,
                    length: result.length
                })
                console.clear();
                console.table({ ...status, total: files.length });
                Debug.success(file, result.length, "encontrado.")
            }

        })
    setTimeout(solverFiles, 2000)
}

function onMatch(strPath, stat) {
    if (strPath.endsWith(`.txt`) || strPath.endsWith(`.log`)) {
        files.push(strPath);
        Debug.success(strPath)
    }

}
function onComplete() {
    Debug.success("Finished")
}
function onPathError(err, strPath) {
    Debug.error("Error for Path " + strPath + " " + err)
}
function onError(err){
    Debug.fatal("Global Error " + err);
}
async function main() {
    await database.start();
    Debug.success("Database conectada.")

    finder.on("match", onMatch)
    finder.on("complete", onComplete)
    finder.on("patherror", onPathError)
    finder.on("error", onError)
    finder.startSearch();

    setTimeout(solverFiles, 5000)
}
main();


app.get("/", (req, res) => {
    return res.json(status)
})
app.listen(1504)