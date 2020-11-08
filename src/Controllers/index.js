
const express=require('express');

const activities=[];


const CreateTask=(req,res)=>{
const newActivity={
    id:activities.length+1,
    name:req.body.name,
    priority:req.body.priority
}
activities.push(newActivity)

return res.status(201).send(activities)
}

const TaskUpdateController=(req,res)=>{

const findTask=activities.find(task=>task.id===parseInt(req.params.id))

if(!findTask) return res.status(404).send('task not found')

findTask.name=req.body.name;
findTask.priority=req.body.priority;

res.send(findTask)

}

const getTask=(req,res)=>{
    
    res.send(activities)
}


module.exports={CreateTask,TaskUpdateController,getTask}