const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

router.get('/', (req, res) => {
    // YOUR CODE HERE
    const queryString = `SELECT * FROM "species"
                        JOIN "class" ON "class".id = "species".class_id;`;

    pool.query(queryString)
        .then((response) => {
            res.send(response.rows);
        })
        .catch((err) => {
            console.log(`Err: ${err}`);
            res.sendStatus(500);
        });
});

module.exports = router;