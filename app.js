var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
var empRouter = require('./server/routes/routes.js');
app.use('/routes',empRouter);
app.use(express.static(path.join(__dirname, './public')));
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '.public/index.html'));
});
app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function() {
    console.log('Listening on port: ', app.get('port'));
});
