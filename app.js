// var router require('./routes/index.js');
import express from 'express';
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

// router(app);

var server = app.listen(8000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});