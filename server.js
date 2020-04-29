var express = require('express');
var app = express();
var path = require('path');

// viewed at http://localhost:8080/xyz
app.get('/xyz', function(req, res) {
    res.sendFile(path.join(__dirname + '/1.html'));
});

app.listen(8080);