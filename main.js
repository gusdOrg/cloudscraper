const FindFiles = require("node-find-files");
const { Signale } = require('signale');
const { PromisePool } = require('@supercharge/promise-pool');
const fs = require('fs')

const utilsRegex = require('./matchs.js');
const DataBase = require('./database');


var files = []
let status = {
    "cookies": 0,
    "senhas": 0,
    "files": 0,
}





const userList = [
    'login',
    'user',

]
const hostList = [
    'host',
    'url',
    'uri'
]

const passList = [
    'pass',
]


var finder = new FindFiles({
    rootFolder: "F:\\",
});

const Debug = new Signale({
    scope: 'Coletor de logs',
    config: {
        displayTimestamp: true,
    }
})

const parseItem = (item) => {
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

            let [domain, name, value] = l
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
const grabKeys = (data) => {


    let result = []
    for (api of utilsRegex) {
        if (api.pattern.test(data)) {
            result.push({
                type: "api_key",
                name: api.name,
                key: api.pattern.exec(data)[0]
            })
        }
    }

    return result;
}
const grabPassword = (data) => {
    let items = data.split('====').map(parseItem).filter(e => e)

    return items;
}
const grabCookies = (data) => {
    let items = data.split('====').map(parseCookies).filter(e => e);

    return items[0];
}

async function solverFiles() {
    if (files.length == 0)
        return;

    let dataArray = [...files];
    files = [];

    await PromisePool
        .withConcurrency(500)
        .for(dataArray)
        .handleError((e, file) => {
            Debug.error(file, e.message)
            fs.appendFileSync('errors.log', `${file} => ${e.message}\n`);
        })
        .process(async (file) => {
            let data = fs.readFileSync(file, 'utf8');
            status.files++;
            let hash = Buffer.from(file).toString('base64');
            let resLogins = await grabPassword(data).then(async r => {
                await database.addLogins(r);
                return r;
            });
            let resCookies = await grabCookies(data).then(async r => {
                await database.addCookies(r);
                return r;
            });
            let resKeys = await grabKeys(data).then(async r => {
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
            console.table(status);
            Debug.success(file, result.length, "encontrado.")
            }
      
        })


}
async function main() {



    await database.start();

    Debug.success("Database conectada.")





    finder.on("match", function (strPath, stat) {
        files.push(strPath);
    })
    finder.on("complete", function () {
        Debug.success("Finished")
    })
    finder.on("patherror", function (err, strPath) {
        Debug.error("Error for Path " + strPath + " " + err)
    })
    finder.on("error", function (err) {
        Debug.fatal("Global Error " + err);
    })
    finder.startSearch();





}