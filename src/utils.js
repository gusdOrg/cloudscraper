
const utilsRegex = require('./pattern.js');
const fs = require('fs');

module.exports = {
    utilsRegex,
    userList: [
        'login',
        'user',

    ],
    hostList: [
        'host',
        'url',
        'uri'
    ],
    passList: [
        'pass',
    ],
    isIncludes: (str, list) => {
        return list.some(e => str.includes(e))
    }
}