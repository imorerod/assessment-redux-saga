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

// router.post('/', (req,res) => {
//     const queryString = `INSERT INTO "species" ("image_id", "tag_id")
//                         VALUES ($1, $2)`;

//     pool.query(queryString, [req.body.imageId, req.body.tagId])
//         .then((response) => {
//             res.sendStatus(201);
//         })
//         .catch((err) => {
//             console.log(`Error posting tags to image-tags table: ${err}`);
//             res.sendStatus(500);
//         });
// })

module.exports = router;