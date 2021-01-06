const express = require('express');

//router
const router = express.Router();

//controller
const getItems = require('../controllers/items');

router.get('/start', getItems.sayHello);

module.exports = router;