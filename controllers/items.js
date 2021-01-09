// Import model
const Item = require('../models/item');

exports.getItems = (req, res, next) => {
  Item.fetchAllItems(items => {
    res.render('todo/items', {
      items: items,
      pageTitle: 'All items',
      path: '/todo/items'
    });
  });
};

exports.getAddItem = (req, res, next) => {
  res.render('todo/add-item', {
    pageTitle: 'Add New Item',
    path: '/todo/add-item'
  });
};

exports.addNewItem = (req, res, next) => {
  const description = req.body.itemDesc;
  console.log(description);
  const item = new Item(description);
  item.save();
  res.redirect('/');
};