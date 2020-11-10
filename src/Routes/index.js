const express=require('express');
const { CreateTaskController, getCreatedTasks} = require('../Controllers/task');
const router=express.Router();
router.post('/api/task',CreateTaskController)
module.exports=router

