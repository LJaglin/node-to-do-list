const express = require('express');

//router
const router = express.Router();

//controller
const items = require('../controllers/items');

router.get('/todo/items', items.getItems);

module.exports = router;