const express = require('express');
const bodyParser = require('body-parser');

const addFeedback = require('./addFeedback')

const app = express();

const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/feedback', addFeedback);

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))
