const FindFiles = require("node-find-files");
const { Signale } = require('signale');
const { PromisePool } = require('@supercharge/promise-pool');
const fs = require('fs');
const express = require("express")

const DataBase = require('./src/database');

const grabPassword = require('./src/grabber/password');
const grabCookies = require('./src/grabber/cookie');
const grabKeys = require('./src/grabber/api_leak');

const app = express()
app.use(express.json())


var files = []
const status = {
    cookies: 0,
    senhas: 0,
    files: 0,
    keys: 0
}

const database = new DataBase()

const Debug = new Signale({
    scope: 'Coletor de logs',
    config: {
        displayTimestamp: true,
    }
})


var finder = new FindFiles({
    rootFolder: "F:\\novo3\\",
    filterFunction: (str, s) => (str.endsWith(`.txt`) || str.endsWith(".log")) && s.size / (1024 * 1024) < 10
});



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
function onError(err) {
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