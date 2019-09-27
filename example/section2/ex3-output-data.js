const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "node_mysql"
});

//Send data to web
app.get('/', (req, res) => {
    db.query("SELECT * FROM users", 
    function (err, result) {
        if (err) throw err;
        res.json(result);
    });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));