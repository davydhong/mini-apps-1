const express = require('express');
const path = require('path');
const csvUtils = require('./csvutils');
const app = express();
const bodyParser = require('body-parser');

// parse application/json
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client')));
app.use(function(req, res, next) {
	// headers required to allow file access from other Origins.
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Headers', ['Origin, X-Requested-With, Content-Type, Accept']);
	res.setHeader('Access-Control-Allow-Methods', ['POST', 'GET', 'OPTIONS', 'DELETE']);
	res.setHeader('Content-Type', 'application/json');
	next();
});

// POST method route
app.post('/post', function(req, res) {
	console.log('SERVER: GETTING POST', req.body);
	res.statusCode = 201;
	res.send(JSON.stringify(csvUtils.JSONtoCSV(req.body)));
});

module.exports.app = app;
