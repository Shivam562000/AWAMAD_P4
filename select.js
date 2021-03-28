var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "shivam562000",
  database: "AWAMAD"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM Teams", function (err, result, fields) {
    if (err) throw err;
    console.log(fields);
  });
  con.query("SELECT team_name FROM Teams", function (err, result, fields) {
    if (err) throw err;
    console.log(fields);
  });
});