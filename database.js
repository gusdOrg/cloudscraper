const { MongoClient } = require('mongodb');
module.exports = class Database {
    constructor() {
        this.serverUrl = "0.tcp.sa.ngrok.io:19905"
    }
    async searchQuery(database, query) {
        return new Promise((resolve, reject) => {
            database.find(query, { limit: 1 }).toArray((err, result) => {
                if (err) reject(err);
                resolve(result);
            });
        });
    }
    async start() {
        let resp = await this.conectar()
        this.database = resp.db("crawler2")
        this.colResults = this.database.collection("results")
        this.crawler = resp.db("crawler")
        this.colLogins = crawler.collection("logins");
        this.colKeys = crawler.collection("api_keys");
        this.colCookies = crawler.collection("cookies");
    }
    async addResult(result) {
        
        return this.colResults.insertOne(result)
    }
    async addLogins(data) {
        if(!data || !data.length || data.length < 1){
            return;
        }
        return this.colLogins.insertMany(data);
    }
    async addCookies(data) {
        if(!data || !data.length || data.length < 1){
            return;
        }
        return this.colCookies.insertMany(data)
    }
    async addKeys(data) {
        if(!data || !data.length || data.length < 1){
            return;
        }
        return this.colKeys.insertMany(data)
    }
    async conectar() {
        return new Promise((resolve) => {
            MongoClient
                .connect(
                    `mongodb://${this.serverUrl}/?readPreference=primary&appname=MongoDB%20Compass&ssl=false`,
                    {
                        useUnifiedTopology: true,
                    }
                )
                .then((resp) => {

                    console.log('database conectada.')
                    return resolve(resp)
                })
                .catch(e => {
                    console.log("Error ao conectar na db: ", e.message);
                    resolve(this.conectar())
                })
        })

    }
}