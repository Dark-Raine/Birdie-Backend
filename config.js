const mysql = require("mysql");

const db = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.BIRDIEUSER,
  password: process.env.BIRDIEPWD,
  database: process.env.BIRDIEDB
});

db.connect(err => {
  if (err) {
    throw err;
  }
  // console.log("mysql connected!");
  console.log(db.state);
});

module.exports = db;
