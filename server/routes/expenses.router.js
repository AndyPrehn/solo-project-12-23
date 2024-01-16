const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
  console.log('This should be working');
  const query = `SELECT * FROM "Expenses" ORDER BY "date" DESC`;
  pool.query(query)
    .then( result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Expenses not available', err);
      res.sendStatus(500)
    })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
  console.log('in expenses post', req.body)
  let queryText = `INSERT INTO "Expenses" ("account", "date", "status", "payee", "category", "amount")
  VALUES ($1, $2, $3, $4, $5, $6);`;
 
  pool.query(queryText, [
      req.body.account,
      req.body.date,
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

router.delete('/:id', (req, res) => {
  console.log('DELETE', req.params);
  let queryText = `
  DELETE FROM "Expenses" WHERE "expense_id" = $1;
  `;
  pool.query(queryText, [req.params.id])
  .then(() => {
      res.sendStatus(200);
  }).catch((error) => {
      console.log('Error in Delete', error);
      res.sendStatus(500);
  })
});


module.exports = router;

