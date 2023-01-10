const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const route = require('./src/route');
const mongodb = require('./src/mongodb');
const cors = require('cors')

const port = 8000;

app.use(bodyParser.json());
app.use(cors());
app.use('/', route);


mongodb();

app.listen(port, () => {
    console.log(`express app listening on http://localhost:${port}`)
})