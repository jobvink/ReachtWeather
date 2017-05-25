var express = require('express');

// een nieuwe app maken
var app = express();
const PORT = process.env.PORT || 3000;

app.use(function (req, res, next) {
	if (req.headers['x-forward-proto'] === 'http') {
		next();
	} else {
		res.redirect('http://' + req.hostname + req.url);
	}
});


app.use(express.static('public'));

app.listen(PORT, function () {
	console.log('Express server draaid op PORT ' + PORT);
});