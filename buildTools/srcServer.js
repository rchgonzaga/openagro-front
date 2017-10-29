var express = require('express');
var webpack = require('webpack');
var path = require('path');
var config = require('../webpack.config');
var open = require('open');

var port = 3000;
var app = express();
var compile = webpack(config);

app.use(require('webpack-dev-middleware')(compile, {noInfo: true}));
app.use(require('webpack-dev-middleware')(compile));

app.get('*', function(req, res) {
	res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function(err) {
	if(err) {
		console.log(err);
	} else {
		open(`http://localhost:${port}`);
	}
});