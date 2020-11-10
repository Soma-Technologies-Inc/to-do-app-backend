const express = require('express');

const {tasks} = require('../models/task');

const getter={
  getTaskbyId :(req,res)=>{
    const task=tasks.find((t)=>t.id===parseInt(req.params.id));
    if(!task){
      res.status(404).send({message:'the task with given ID is not found'})
    }else{
      res.status(200).send({
        message:'success',
        data:task
      });
    }
    
   },
  getByPriority:(req,res)=>{
    
    const priority =[];
    tasks.map(p=>{
if(p.priority===req.params.priority){
  priority.push(p);
}
    });

    if(priority.length===0){
      res.status(404).send({message:'the task with given priority is not found'})
  } else{
    res.status(200).send({
      message:'success',
      data:priority
    });
  }
    
   },
 createTask :(req,res)=>{
  
    const create={id:tasks.length+1, priority: req.body.priority}
    tasks.push(create);
    return res.status(201).send({
      message: 'you are successful create the task',
      data: create,
    })
}
};
module.exports=getter;



