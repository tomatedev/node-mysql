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