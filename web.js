var express = require('express');
var packageInfo = require('./package.json');

var app = express();

app.get('/', function (req, res) {
  res.json({ version: packageInfo.version });
});

var ipaddress = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1',
    port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080;


var server = app.listen(port, ipaddress, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Web server started at http://%s:%s', host, port);
});
