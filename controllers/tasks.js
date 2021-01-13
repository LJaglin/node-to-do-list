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
  res.render('todo/edit-task', {
    pageTitle: 'Add New Task',
    path: '/todo/add-task',
    editing: false
  });
};

exports.postAddTask = (req, res, next) => {
  const description = req.body.taskDesc;
  const task = new Task(null, description);
  task.save();
  res.redirect('/todo/tasks');
};

exports.getEditTask = (req, res, next) => {
  const editMode = req.query.edit;
  console.log(`editMode= ${editMode}`);
  if (!editMode) {
    return res.redirect('/todo/tasks');
  }
  const taskId = req.params.taskId;
  console.log(`taskid= ${taskId}`);
  Task.findTaskById(taskId, task => {
    if (!task) {
      return res.redirect('/todo/tasks');
    }
    console.log(task);
    res.render('todo/edit-task', {
      pageTitle: 'Edit Task',
      path: '/todo/edit-task',
      editing: editMode,
      task: task
    });
  });
};

exports.postEditTask = (req, res, next) => {
  const taskId = req.body.taskId;
  const updatedDescription = req.body.taskDesc;

  const updatedTask = new Task(taskId, updatedDescription);
  updatedTask.save();
  res.redirect('/todo/tasks');
};