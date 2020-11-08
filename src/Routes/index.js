const express=require('express');
const { CreateTaskController, getCreatedTasks} = require('../Controllers/task');
const router=express.Router();
router.post('/api/task',CreateTaskController)
router.get('/api/task',getCreatedTasks)

module.exports=router

