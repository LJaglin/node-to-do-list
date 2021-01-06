const express = require('express');

//router
const router = express.Router();

//controller
const getItems = require('../controllers/items');

router.get('/test', getItems.satHello);

module.exports = router;