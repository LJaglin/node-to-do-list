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
  constructor(id, description) {
    this.id = id;
    this.description = description;
  }

  // save task
  save() {
    console.log(`Task.save()`);
    getTasksFromFile(tasks => {
      if (this.id) {
        const existingTaskIdx = tasks.findIndex(task => task.id === this.id);
        const updatedTasks = [...tasks];
        updatedTasks[existingTaskIdx] = this;
        console.log(updatedTasks[existingTaskIdx]);
        fs.writeFile(p, JSON.stringify(updatedTasks), err => {
          console.log(err);
        });
      } else {
        this.id = (Math.random() * Math.random()).toString();
        tasks.push(this);
        fs.writeFile(p, JSON.stringify(tasks), err => {
          console.log(err);
        });
      }
    });
  }

  static fetchAllTasks(callback) {
    getTasksFromFile(callback);
  }

  static findTaskById(id, callback) {
    getTasksFromFile(tasks => {
      const task = tasks.find(task => task.id === id);
      callback(task);
    });
  }

  static deleteTaskById(id) {
    getTasksFromFile(tasks => {
      const updatedTasks = tasks.filter(task => task.id !== id);
      fs.writeFile(p, JSON.stringify(updatedTasks), err => {
        console.log(err);
      });
    });
  }

};
