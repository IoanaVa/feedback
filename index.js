const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const addFeedback = require('./addFeedback')

const app = express();
app.use(cors());

const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/feedback', addFeedback);

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))