const  express = require('express');
const {TaskUpdateController}=require('../Controllers/index')
const router=express.Router();
router.put('/tasks/:TaskId',TaskUpdateController)
module.exports=router;
