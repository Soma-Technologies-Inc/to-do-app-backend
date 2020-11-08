const  express = require('express');

const {CreateTask, TaskUpdateController, getTask}=require('../Controllers/index')

const router=express.Router();
router.get('/tasks',getTask)
router.post('/tasks',CreateTask)
router.put('/tasks/:id',TaskUpdateController)

module.exports=router;
