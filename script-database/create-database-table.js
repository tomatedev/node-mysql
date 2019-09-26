const mysql = require('mysql');
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: ""
});

db.connect(function(err) {
    
    if (err) throw err;
    console.log("Connected!");
    db.query("CREATE DATABASE node_mysql", function (err, result) {
      if (err) throw err;
        console.log("Database created");

        const table = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "",
            database: "node_mysql"
        });

            var sql = "CREATE TABLE users (id INT(11) primary key auto_increment, firstname VARCHAR(50), lastname VARCHAR(50), email VARCHAR(100), password VARCHAR(100))";
            table.query(sql, function (err, result) {
                if (err) throw err;
                console.log("Table Users Created");

                var sqlInsertUsers = "INSERT INTO Users (firstname, lastname, email, password) VALUES ('Arm', 'Armna', 'Arm@gmail.com', '1111')";
                table.query(sqlInsertUsers, function (err, result) {
                        if (err) throw err;
                        console.log("1 record inserted");
                    });
            });

            var sqlPosts = "CREATE TABLE posts (id INT(11) primary key auto_increment, message VARCHAR(150), user_id INT(11))";
            table.query(sqlPosts, function (err, result) {
                if (err) throw err;
                console.log("Table Posts Created");

                var sqlInsertPosts = "INSERT INTO posts (message, user_id) VALUES ('Welcome to Node Js', '1')";
                table.query(sqlInsertPosts, function (err, result) {
                    if (err) throw err;
                    console.log("1 record inserted");
                });
            });
    });
});
