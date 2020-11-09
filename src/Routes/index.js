const express = require('express');

const { deleteTaskController } = require('../Controllers/index.js');

const router = express.Router();


router.delete('/api/task/:id', deleteTaskController);


module.exports = router;