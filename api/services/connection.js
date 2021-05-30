const path = require('path')
const { MongoClient } = require('mongodb'); 

module.exports = {
    connect: async (DB_URL) => {
        
        const client = new MongoClient(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
 
        try {
            // Connect to the MongoDB cluster
            await client.connect(); 
            console.log('Connected to database.')
        } catch (e) {
            console.error(e);
        }
    },

    close: async () => {
        await client.close();

    }
}
