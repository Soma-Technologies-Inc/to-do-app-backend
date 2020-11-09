const express = require('express');
const Tasks = [];

const deleteAllTasks = (req, res) => {
    Tasks.splice(0, Tasks.length)
    res.status(200).json('All todo tasks were successfully deleted yu know that you wont find any')
}


module.exports = {
    deleteAllTasks
}