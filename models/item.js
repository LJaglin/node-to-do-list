const fs = require('fs');
const path = require('path');

// path to items.json
const p = path.join(path.dirname(process.mainModule.filename), 'data', 'items.json');

// retrive data from items.json
const getItemsFromFile = callback => {
  fs.readFile(p, (err, data) => {
    if(err) {
      callback([]);
    } else {
      callback(JSON.parse(data));
    }
  });
};

module.exports = class Item {
  constructor(description) {
    this.description = description;
  }

  // save item
  save() {
    this.id = Math.random().toString();
    getItemsFromFile(items => {
      items.push(this);
      fs.writeFile(p, JSON.stringify(items), err => {
        console.log(err);
      });
    })
  }

  static fetchAllItems(callback) {
    getItemsFromFile(callback);
  }
};
