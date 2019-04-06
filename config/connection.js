// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "gzp0u91edhmxszwf.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "a1gjv6hpmcthx2k5",
  password: "tl5uysuo7xov025a",
  database: "yq47l0h0cilb0tqb"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;