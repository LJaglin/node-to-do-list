const fs = require('fs');
const path = require('path');

// path to task.json
const p = path.join(path.dirname(process.mainModule.filename), 'data', 'tasks.json');

// retrive data from tasks.json
const getTasksFromFile = callback => {
  fs.readFile(p, (err, data) => {
    if(err) {
      callback([]);
    } else {
      callback(JSON.parse(data));
    }
  });
};

module.exports = class Task {
  constructor(description) {
    this.description = description;
  }

  // save task
  save() {
    this.id = Math.random().toString();
    getTasksFromFile(tasks => {
      tasks.push(this);
      fs.writeFile(p, JSON.stringify(tasks), err => {
        console.log(err);
      });
    })
  }

  static fetchAllTasks(callback) {
    getTasksFromFile(callback);
  }
};
