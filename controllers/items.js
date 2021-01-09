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