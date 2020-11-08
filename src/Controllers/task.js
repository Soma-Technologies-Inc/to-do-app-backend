const express=require('express');
const Tasks=[];
const CreateTaskController=(req,res)=>{
const newTask={
    TaskId:Tasks.length+1,
    TaskName:req.body.TaskName,
    TaskPriority:req.body.TaskPriority
}
Tasks.push(newTask)  
return res.status(201).send(Tasks)
}
const getCreatedTasks=(req,res)=>{
    return res.status(200).send(Tasks);
}
module.exports={CreateTaskController,getCreatedTasks}










