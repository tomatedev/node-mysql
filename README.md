# node-mysql-jwt
node &amp; mysql &amp; jwt

# install
 <pre> npm i </pre><br>
<b>or</b><br> 
npm install

# edit config file 
path config/database.js<br>
 <pre> 
 const db = mysql.createConnection({<br>
     host: "your host",<br>
     user: "your user",<br>
     password: "your password",<br>
     database: "node_mysql"<br>
});
</pre>
<br>

path script-database/create-database-table.js<br>
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
cd script-database <br>
node create-database-table.js

# run project
npm run dev
