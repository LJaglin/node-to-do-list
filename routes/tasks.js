const express = require('express');

//router
const router = express.Router();

//controller
const tasks = require('../controllers/tasks');

router.get('/todo/tasks', tasks.getTasks);

router.get('/todo/add-task', tasks.getAddTask);

router.post('/todo/add-task', tasks.addNewTask);

module.exports = router; 