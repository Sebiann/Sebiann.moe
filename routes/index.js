/* eslint-disable no-unused-vars */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Sebiann.moe' });
});

module.exports = router;
