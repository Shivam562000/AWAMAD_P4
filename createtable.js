var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "shivam562000",
  database: "AWAMAD"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE Teams (team_id VARCHAR(255), team_name VARCHAR(255), team_lead VARCHAR(255),team_count VARCHAR(255))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table named team created successfully");
  });
});