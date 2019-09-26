const express = require('express');
const bodyParser = require('body-parser');
const users = require('./routes/users');
const passport = require('passport');

const app = express();
app.use(bodyParser.urlencoded());

app.use(function (req, res, next) {
    // ["http://localhost:3001", "http://localhost:3000"].map(function(domain) {
  	// 	res.setHeader( "Access-Control-Allow-Origin", domain );
	// });
    res.setHeader( "Access-Control-Allow-Origin", "*" );
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use(passport.initialize());
require('./config/passport')(passport);


app.use('/api/users', users);


app.listen(80, () => console.log('Example app listening on port 80!'));