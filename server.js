var express = require('express');
var path = require('path');

var app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'other', 'index.html'));
});

app.listen(process.env.PORT || 3000);
