const express = require('express');
const router  = express.Router();
const db = require('../../config/database');

router.get('/', (req, res) => {
    db.query("SELECT * FROM users", 
    function (err, result) {
        if (err) throw err;
        res.json(result);
    });
});

module.exports = router;