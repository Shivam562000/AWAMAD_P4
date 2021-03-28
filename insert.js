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
  var sql = "insert into Teams (team_id, team_name, team_lead, team_count) VALUES ?";
  var values = [
      ['1', 'CSK', 'MS Dhoni','1'],
    ['2', 'MI', 'Rohit Sharma','2'],
    ['3', 'RCB', 'Virat Kholi','3'],
  ];
  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Data inserted in Teams table successfully");
  });
});