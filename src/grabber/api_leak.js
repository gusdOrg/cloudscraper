const {utilsRegex} = require('../utils.js');

module.exports = {

    grab: (data) => new Promise((res) => {


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
}