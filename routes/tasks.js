const express = require('express');

//router
const router = express.Router();

//controller
const tasksController = require('../controllers/tasks');

router.get('/todo/tasks', tasksController.getTasks);

router.get('/todo/add-task', tasksController.getAddTask);

router.post('/todo/add-task', tasksController.postAddTask);

router.get('/todo/edit-task/:taskId', tasksController.getEditTask);

router.post('/todo/edit-task', tasksController.postEditTask);

module.exports = router; 