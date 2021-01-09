const express = require('express');

//router
const router = express.Router();

//controller
const items = require('../controllers/items');

router.get('/todo/items', items.getItems);

router.get('/todo/add-item', items.getAddItem);

router.post('/todo/add-item', items.addNewItem);

module.exports = router; 