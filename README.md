# node-mysql-jwt
node &amp; mysql &amp; jwt

# install
npm i<br>
<b>or</b><br> 
npm install

# edit config file 
const db = mysql.createConnection({
    host: "your host",
    user: "your user",
    password: "your password",
    database: "node_mysql"
});


# create database
cd script-database <br>
node create-database-table.js

# run project
npm run dev
