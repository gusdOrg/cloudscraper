const {isIncludes} = require("../utils.js");
module.exports = {

    grab : (data) => new Promise((res) => {
        let items = data.split('====').map(this.parse).filter(e => e)

        return res(items);
    }),
    parse : (item) => {
   
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
   
}