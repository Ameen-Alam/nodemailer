var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var router = require('./router');
app.use(function (req, res, next) {
    var allowedOrigins = ['http://localhost:3000', 'http://localhost:3000?', 'https://crcicimmigration.firebaseapp.com', 'https://crcicimmigration.firebaseapp.com?', 'https://construction-19bf3.firebaseapp.com', 'https://construction-19bf3.firebaseapp.com?', 'https://crcic-f8f8f.firebaseapp.com', 'https://crcic-f8f8f.firebaseapp.com?', 'https://oceanrecruitment-d4dc5.firebaseapp.com', 'https://oceanrecruitment-d4dc5.firebaseapp.com?'];
    var origin = req.headers.origin;
    if (allowedOrigins.indexOf(origin) > -1) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    }
    res.header('Access-Control-Allow-Methods', 'GET, OPTIONS, POST, PUT');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.header('Access-Control-Allow-Credentials', true);
    return next();
});
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(router);
app.listen("https://pure-savannah-92573.herokuapp.com", () => {
    console.log('app is running on port 3000')
})