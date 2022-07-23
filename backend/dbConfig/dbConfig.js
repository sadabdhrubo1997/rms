const mysql = require('mysql');
const env = require("dotenv").config()


// create here mysql connection
const dbConn = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    connectionLimit: 50,
    queueLimit: 0,
    waitForConnection: true
});


dbConn.connect(function (error) {
    if (error) throw error;
    console.log(`Database Connected Successfully!!! Your Database name is \" ${process.env.DB_NAME} \"`);
})

module.exports = dbConn;
