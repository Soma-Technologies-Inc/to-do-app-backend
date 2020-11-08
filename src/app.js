
const express =require('express');
const app=express();
const bodyParser = require('body-parser');
app.use(express.json())
app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: false }))

const router=require('./Routes/index')

app.use(router)

//listen to port
app.listen(5000);
console.log('server is running properly');
