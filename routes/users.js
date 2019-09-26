const express = require('express');
const jwt = require('jsonwebtoken');
const router  = express.Router();
const db = require('../config/database');
const keys = require('../config/key');
const passport = require('passport');

router.get('/', passport.authenticate('jwt', { session: false }), (req, res) => {
    db.query("SELECT * FROM users LIMIT 100", 
    function (err, result) {
        if (err) throw err;
        res.json(result);
    })
});

//USER REGISTER
router.post('/register', (req, res) => {
    db.query("INSERT INTO Users SET ?",req.body, 
    function (err, result) {
       if (err) throw err;
        res.json(result);
    })
});

//USER LOGIN
router.post('/login', (req, res) => {
    var sql = "SELECT * FROM Users WHERE email='"+req.body.email+"' and password='"+req.body.password+"'";
    db.query(sql, 
    function (err, [user]) {
       if (err) throw err;
       const payload = { 
            id: user.id, 
            firstname: user.firstname, 
            lastname: user.lastname, 
            email: user.email
        };
        jwt.sign(
            payload,
            keys.secretOrKey,
            { expiresIn: 3600 }, 
            (err, token) => {
            res.json({
                success: true,
                token: 'Bearer ' + token
            });
        });
    })
});

//GET CURRENT USER
router.get('/current', passport.authenticate('jwt', { session: false}), (req, res) => {
    var sql = "SELECT * FROM Users WHERE id='"+req.user.id+"'";
    db.query(sql, 
    function (err, user, fields) {
        res.status(200).json({
            code: res.statusCode,
            message: 'Current Users',
            data: user
        });
    });
});

//EDIT USER DATA
router.put('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
    var sql = "DELETE FROM Users WHERE id='"+req.params.id+"'";
    db.query(sql, 
    function (err, result, fields) {
        res.json({
            code: res.statusCode,
            message: 'Delete Success',
            data: result
        });
    });
});

//DELETE USER DATA
router.delete('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
    var sql = "DELETE FROM Users WHERE id='"+req.params.id+"'";
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