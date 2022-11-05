const { readdirSync, appendFileSync, writeFileSync, readFileSync, statSync, fstat } = require('fs');
const { join } = require('path')
const { Signale } = require('signale');
const { PromisePool } = require('@supercharge/promise-pool')

const checked = require("./tests.json")

const utilsRegex = require('./matchs.js');
const DataBase = require('./database');


const database = new DataBase();
const regOption = /(.*)([\:\=] )(.*)$/s



const Debug = new Signale({
    scope: 'Coletor de logs',
    config: {
        displayTimestamp: true,
        displayDate: true,
        displayFilename: true,

    }
})



const isIncludes = (str, list) => {
    return list.some(e => str.includes(e))
}
const isDirectory = path => {
    try {
        return statSync(path).isDirectory();
    } catch (error) {
        return false;
    }
};
const getDirectories = path =>
    readdirSync(path).map(name => join(path, name)).filter(isDirectory);

const isFile = path => {
    try {
        return statSync(path).isFile()
    } catch (error) {
        return false
    }
};
const getFiles = path =>
    readdirSync(path).map(name => join(path, name)).filter(e => isFile(e) && e.toLocaleLowerCase().includes(".txt") && (statSync(path).size / (1024 * 1024) < 3) && isIncludes(e.toLowerCase(), fileList));

const getFilesRecursively = (path) => {
    let dirs = getDirectories(path);
    let files = dirs
        .map(dir => getFilesRecursively(dir)) // go through each directory
        .reduce((a, b) => a.concat(b), []);    // map returns a 2d array (array of file arrays) so flatten
    return files.concat(getFiles(path));
};

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

const fileList = [
    'txt',
    'log',
    'db'
]

const parseItem = (item) => {
    let lines = item.split("\n").map(l => l.trimEnd())
    let resp = {
        url: undefined,
        login: undefined,
        pass: undefined,
        type:"login"
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

            expirationDate = new Date(parseInt(expirationDate + '000'))

            let data = expirationDate.toString().split('T')[0];


            return {
                type:"cookies",
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
const grabUtils = (data) => {

 
    let result = []
    for(api of utilsRegex){
        if(api.pattern.test(data)){
            result.push({
                type:"api_key",
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
async function main() {
   

    let status = {
        "cookies": 0,
        "senhas": 0,
        "files": 0,
    }
    


    await database.start();

    Debug.success("Database conectada.")


    let files = getFilesRecursively('C:\\Users\\gusdnide\\Downloads\\Telegram Desktop\\logs');
    Debug.fav(files.length, "Arquivos encontrados.")

    await PromisePool
        .withConcurrency(900)
        .for(files)
        .handleError(e => console.log(e))
        .process(async file => {
            let data = readFileSync(file, 'utf8');
  
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
            let resKeys = await grabUtils(data).then(async r => {
                await database.addKeys(r);
                return r;
            });
            
            let result =  [...resCookies, ...resLogins, ...resKeys]

            if(result.length > 0){
                await database.addResult({
                    hash,
                    result,
                    length: result.length
                })
            }
            console.clear();
            console.table(status);
            Debug.success(file, result.length, "encontrado.")
            return true;
        })

    Debug.success("Logins e senhas: ", senhas);
    Debug.success("Cookies: ", cookies);

}

(async () => {

  

    await main()

})()
