# node-mysql-jwt
node &amp; mysql &amp; jwt

# install
npm i<br>
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
const db = mysql.createConnection({<br>
    host: "your host",<br>
    user: "your user",<br>
    password: "your password",<br>
    database: "node_mysql"<br>
});<br>


# create database
cd script-database <br>
node create-database-table.js

# run project
npm run dev
