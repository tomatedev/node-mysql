# node-mysql-jwt
node &amp; mysql &amp; jwt

# install
 <pre> npm i </pre>
<b>or</b>
 <pre> npm install </pre>

# edit config file 
path ./config/database.js<br>
 <pre> 
 const db = mysql.createConnection({
     host: "your host",
     user: "your user",
     password: "your password",
     database: "node_mysql"
});
</pre>

path ./script-database/create-database-table.js<br>
<pre>
const db = mysql.createConnection({
    host: "your host",
    user: "your user",
    password: "your password"
});
</pre>

<pre>
 const table = mysql.createConnection({
     host: "your host",
     user: "your user",
     password: "your password",
     database: "node_mysql"
 });
</pre>

# create database
<pre> cd script-database </pre>
<b>run create database</b>
<pre> node create-database-table.js</pre>

# run project
<pre> npm run dev </pre>
