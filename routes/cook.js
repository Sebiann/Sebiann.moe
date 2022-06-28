/* eslint-disable no-unused-vars */
var express = require('express')
var router = express.Router()

/* GET cook page. */
router.get('/cook', function (req, res, next) {
  res.render('cook', { title: 'Sebiann.moe: Cook' })
})

module.exports = router
