const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
  console.log('in income post', req.body)
  let queryText = `INSERT INTO "Income" ("account", "date", "source", "category", "amount")
  VALUES ($1, $2, $3, $4, $5);`;
 
  pool.query(queryText, [
      req.body.account,
      req.body.date,
      req.body.source,
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

