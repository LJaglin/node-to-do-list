// Import model
const Task = require('../models/task');

exports.getTasks = (req, res, next) => {
  Task.fetchAllTasks(tasks => {
    res.render('todo/tasks', {
      tasks: tasks,
      pageTitle: 'All tasks',
      path: '/todo/tasks'
    });
  });
};

exports.getAddTask = (req, res, next) => {
  res.render('todo/add-task', {
    pageTitle: 'Add New Task',
    path: '/todo/add-task'
  });
};

exports.addNewTask = (req, res, next) => {
  const description = req.body.taskDesc;
  console.log(description);
  const task = new Task(description);
  task.save();
  res.redirect('/');
};