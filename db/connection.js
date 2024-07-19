const mysql = require('mysql2');



const connection = mysql.createConnection(
  {
    host: "localhost",
    // MySQL username,
    user: "root",
    // MySQL password
    password: "rootroot",
    database: "employee_db",
  },
  
);

module.exports = connection