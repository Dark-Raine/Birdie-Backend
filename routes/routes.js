const express = require("express");
const router = express.Router();
const db = require("../config");

router.get("/column/variables", (req, res) => {
  let sql = "SHOW COLUMNS FROM census_learn_sql";
  db.query(sql, (err, result) => {
    if (err) {
      res.json({ message: err.sqlMessage });
    }
    res.json(result.map(colObj => (colObj = colObj["Field"])));
  });
});

router.get("/:query", (req, res) => {
  console.log(req.params);
  let columnTitle = `\`` + `${decodeURI(req.params.query)}` + `\``;
  let sql = `SELECT ${columnTitle} AS columnTitle, COUNT(*) AS count, AVG(age) AS ageAverage FROM census_learn_sql GROUP BY ${columnTitle} ORDER BY COUNT(*) DESC`;
  db.query(sql, (err, result) => {
    if (err) {
      res.json({ message: err.sqlMessage });
    }
    res.json(result);
  });
});

module.exports = router;
