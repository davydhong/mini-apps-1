const express = require('express');
const app = express();
const db = require('./dbmodel');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.static('public'));
app.post('/post', function(req, res) {
  if (req.body.page === 'F1') {
    db.actions.initUserData(req.body, ObjectId => {
      res.status = 201;
      res.send(JSON.stringify(ObjectId));
    });
  } else if (req.body.page === 'F2' || req.body.page === 'F3') {
    console.log('Hi', req.body);
    db.actions.updateUserData(req.body, () => {
      res.status = 201;
      res.send(JSON.stringify('updated'));
    });
  }
});

app.get('/get', (req, res) => {
  db.actions.retrieveData(result => {
    res.statusCode = 200;
    res.send(JSON.stringify(result));
  });
});

app.listen(3000, () => console.log('Check-out listening on port 3000!'));
