const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const port = 3000;
const router = require('./Routes');


app.use(express.json())
app.use(bodyParser.json());

app.use(router);

app.listen(port, () => console.log(`ToDo app server is listening on ${port} port!`));