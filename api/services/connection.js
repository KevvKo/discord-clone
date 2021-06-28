const mysql = require('mysql');
require('dotenv').config()

module.exports = {
    
    connect: async () => {
        
        const db_host = process.env.DB_HOST;
        const db_user = process.env.DB_USER;
        const db_password = process.env.DB_PASSWORD;

        var pool = mysql.createPool({
            host: db_host,
            user: db_user,
            password: db_password
        });
        
        pool.getConnection((error, connection) => {
            if(error) throw error;
            console.log(`connection as id: ${connection.threadId}`)
        })
    },
}
