module.exports = {

    grab: (data) => new Promise((res) => {
        let items = data.split('====').map(this.parse).filter(e => e);

        return res(items[0]);
    }),


    parse: (cookies) => {
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
                    type: "cookie",
                    domain,
                    name,
                    value,
                }
            } catch (error) {
                return undefined;
            }
        }).filter(c => c);
    }
}