const express = require('express');
// const app = express();
const { app } = require('./routes');

app.listen(3000, () => console.log('Listening on port 3000!'));

module.exports = app;
