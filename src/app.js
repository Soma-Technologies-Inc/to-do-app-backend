const express = require('express');
const bodyParser=require('body-parser');
const router = require('./Routes/routeFile');
const {newPort} = require('./models/task');

const app = express();
app.use(bodyParser.json());
app.use(router);


const port=process.env.port || newPort;
app.listen(port, ()=>console.log('hello there!!!!')) ;



