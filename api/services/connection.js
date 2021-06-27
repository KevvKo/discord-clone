const mysql = require('mysql');
const { DB_HOST, DB_USER, DB_PASSWORD } = require('dotenv').config()

module.exports = {
    
    connect: async () => {
        
        const db_host = process.env.DB_HOST;
        const db_user = process.env.DB_USER;
        const db_password = process.env.DB_PASSWORD;

        var con = mysql.createConnection({
            db_host: db_host,
            db_user: db_user,
            db_password: db_password
        });
        
        con.connect( error => {
            console.log("Database is connected")
        })
    },

    close: async () => {
        await client.close();

    }
}
