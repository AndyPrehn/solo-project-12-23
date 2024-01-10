// const express = require('express');
// const pool = require('../modules/pool');
// const router = express.Router();

// /**
//  * GET route template
//  */
// router.get('/', (req, res) => {
//   // GET route code here
// });

// /**
//  * POST route template
//  */
// router.post('/', (req, res) => {
//   // POST route code here
//   console.log('in expenses post', req.body)
//   let queryText = `INSERT INTO "Expenses" ("account", "date", "status", "payee", "category", "amount")
//   VALUES ($1, $2, $3, $4, $5, $6);`;
 
//   pool.query(queryText, [
//       req.body.account,
//       req.body.date,
//       req.body.status,
//       req.body.payee,
//       req.body.category,
//     req.body.amount])
//       .then(result => {
//           res.sendStatus(200);
//           console.log('POST successful.');
//       })
//       .catch(error => {
//           console.error(error);
//           res.sendStatus(500);

//       });
// });


// module.exports = router;

