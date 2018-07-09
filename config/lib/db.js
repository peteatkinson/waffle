const Promise = require('bluebird')

const initOptions = {
    promiseLib : Promise
}

const pgp = require('pg-promise')(initOptions)

const db = pgp({
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    database: process.env.PG_DATABASE,
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD
})

module.exports = db