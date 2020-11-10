const express=require('express');
const app=express();
const bodyParser=require('body-parser');
app.use(express.json())
app.use(bodyParser.json());
const router=require('./Routes')
app.use(router)

app.listen(3000,()=>console.log('server is running on 3000')
    
)

