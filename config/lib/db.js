import { Pool } from "pg";
const connectionString = process.env.POSTGRES_CONNECTION;

const connectionPool = new Pool({connectionString: connectionString})

module.exports = {
    connect: async function() {
        const client = await connectionPool.connect()
        return client
    },

    query: async function(command) {
        try {
            const client = await connect()
            return await client.query(command)
        }
        catch(err) {
            console.log(`Postgres query command threw an error \n ${error.stack}`)
        }
    }
   

}
