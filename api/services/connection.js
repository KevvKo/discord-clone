const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname,'../.env' )});
const { db_user, db_password } = require('../config');
const { MongoClient } = require('mongodb'); 
const { dirname } = require('path');

async function main() {

    const url = `mongodb+srv://${db_user}:${db_password}@discord-db.rlsxs.mongodb.net/test?retryWrites=true&w=majority`
    const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
 
    try {
        // Connect to the MongoDB cluster
        await client.connect(); 
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}
// 
main().catch(console.error);
