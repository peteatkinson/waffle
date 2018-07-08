import { Client, Pool } from "pg";
const connectionString = process.env.POSTGRES_CONNECTION;

const client = new Client(connectionString)

module.exports = {
    connect: function() {
        client.connect();
        return client;
    },
    query: function() {
        
    }

}
