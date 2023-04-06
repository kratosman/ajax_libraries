const mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Benjiesilvano14300101',
    database: 'test_axen'
})

if (!conn) { 
    console.log('Not Connected to database!');
} else {
    console.log('Database are connected!');
}

module.exports = conn;