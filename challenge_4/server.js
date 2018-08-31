const express = require('express');
const app = express();

app.use(express.static('./client/dist'));

app.get('/', (req, res) => res.send('this should go away!'));

app.listen(3000, () => console.log('Connect 4 app listening on port 3000!'));
