const express = require('express');
const router = express.Router();
const SearchController = require('../controllers/SearchController');

router.get('/data', SearchController.getSearchData);

module.exports = router;