const express = require('express');
const bodyParser = require('body-parser');
const users = require('./ex1-routes');
const adduser = require('./ex2-add-user');
const app = express();
app.use(bodyParser.urlencoded());
app.use('/api/users', users);
app.use('/api/admin', adduser);

app.listen(3000, () => console.log('Example app listening on port 3000!'));