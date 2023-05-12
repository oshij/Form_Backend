const express = require('express');
const db = require('./db');

const router = express.Router();

router.post('/api/data', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    const age = req.body.age;

    const sql = "INSERT INTO my_table (name, email, phone, age) VALUES (?, ?, ?, ?)";
    db.query(sql, [name, email, phone, age], (err, result) => {
        if (err) {
            console.error(err);
            res.sendStatus(500);
        } else {
            console.log("Data inserted successfully");
            res.sendStatus(200);
        }
    });
});

module.exports = router;
