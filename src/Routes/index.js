const express = require('express');

const {
    deleteAllTasks
} = require('../Controllers/index.js');

const router = express.Router();

router.delete('/api/task', deleteAllTasks);

module.exports = router;