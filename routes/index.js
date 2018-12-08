const path = require('path');

const express = require('express');

const indexController = require('../controllers/index')
const resultsController = require('../controllers/results')

const router = express.Router();

// / => GET
router.get('/', indexController.getQuerys);

router.get('/results', resultsController.getResults);


module.exports = router;
