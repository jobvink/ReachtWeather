var express = require('express');

// een nieuwe app maken
var app = express();

app.use(express.static('public'));

app.listen(3000, function () {
	console.log('Express server draaid op port 3000');
});