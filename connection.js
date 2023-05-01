var mysql = require('mysql');
var queries = require('./queries')

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "moving_box"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");

    //Database creation
    con.query(queries.database_sql, function (err, result) {
        if (err) throw err;
        console.log("Database created");
      });

    //User Table creation

    con.query(queries.user_table_sql, function (err, result) {
        if (err) throw err;

        console.log("User Table created");

        const create_admin = require('./create_admin')
        create_admin()

      });


      //Company Table creation
      con.query(queries.company_table_sql, function (err, result) {
        if (err) throw err;

        console.log("Company Table created");

      });


      //Company Table creation
      con.query(queries.invoices_table_sql, function (err, result) {
        if (err) throw err;

        console.log("Invoices Table created");

      });


      //Maintenance Table creation
      con.query(queries.maintenance_history_table_sql, function (err, result) {
        if (err) throw err;

        console.log("Maintenance Table created");

      });

      //Tokens Table creation
      con.query(queries.tokens_table_sql, function (err, result) {
        if (err) throw err;

        console.log("Tokens Table created");

      });
})

module.exports = con;