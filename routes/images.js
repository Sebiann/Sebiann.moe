/* eslint-disable no-unused-vars */
var express = require('express');
var router = express.Router();

/* GET images page. */
router.get('/images', function(req, res, next) {
  res.render('images', { title: 'Sebiann.moe: Images' }, { imagePaths });
});

module.exports = router;
