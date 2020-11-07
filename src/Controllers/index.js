const express = require('express');
const Tasks = [];

const deleteTaskController = (req,res) => {
    const taskToDelete = Tasks.find(task => task.id === parseInt(req.params.id));
    if(!taskToDelete) return res.status(404).json('Oups this task is not here to find and you may be lost');
    const index = Tasks.indexOf(taskToDelete);
    Tasks.splice(index,1);
    res.status(200).json(`task successfully deleted`);
};

module.exports = { deleteTaskController };