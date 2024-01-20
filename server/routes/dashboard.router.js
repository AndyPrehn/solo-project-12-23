const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
  console.log('This should be working');
  // const query = `SELECT * FROM "Income"`;
//   const query = `SELECT "Income".*, "Expenses".*
// FROM "Income"
// INNER JOIN "Expenses" ON "Income".date = "Expenses".date
// ORDER BY "Expenses".date DESC`;
const query = `SELECT *
FROM "Income"
FULL OUTER JOIN "Expenses"
ON "Income".date = "Expenses".date`;

  pool.query(query)
    .then( result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Dashboard not available', err);
      res.sendStatus(500)
    })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
  console.log('in dashboad post', req.body)
  let queryText = `INSERT INTO "Dashboard" ("account", "date", "source", "status", "payee", "category", "amount")
  VALUES ($1, $2, $3, $4, $5, $6, $7);`;
 
  pool.query(queryText, [
      req.body.account,
      req.body.date,
      req.body.source,
      req.body.status,
      req.body.payee,
      req.body.category,
    req.body.amount])
      .then(result => {
          res.sendStatus(200);
          console.log('POST successful.');
      })
      .catch(error => {
          console.error(error);
          res.sendStatus(500);

      });
});



module.exports = router;