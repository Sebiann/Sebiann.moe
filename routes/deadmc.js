/* eslint-disable no-unused-vars */
var express = require('express')
var router = express.Router()

/* GET minecraft page. */
router.get('/deadmc', function (req, res, next) {
  res.render('deadmc', { title: 'Sebiann.moe: Dead MC' })
})

module.exports = router
