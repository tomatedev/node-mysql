const express = require('express');
const router  = express.Router();
const db = require('../../config/database');

router.post('/register', (req, res) => {
    db.query("INSERT INTO users SET ?",req.body, 
    function (err, result) {
       if (err) throw err;
        res.json(result);
    })
});

router.post('/add', (req, res) => {
    var sql = "INSERT INTO users(firstname, lastname, email, password) VALUES('"+req.body.firstname+"','"+req.body.lastname+"','"+req.body.email+"','"+req.body.password+"')";
    db.query(sql,
    function (err, result) {
       if (err) throw err;
        res.json(result);
    });
});

router.delete('/:id', (req, res) => {
    var sql = "DELETE FROM users WHERE id='"+req.params.id+"'";
    db.query(sql, 
    function (err, result, fields) {
        res.json({
            code: res.statusCode,
            message: 'Delete Success',
            data: result
        });
    });
});

module.exports = router;