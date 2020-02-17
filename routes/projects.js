/* eslint-disable no-unused-vars */
var express = require('express')
var router = express.Router()

/* GET projects page. */
router.get('/projects', function (req, res, next) {
  res.render('projects', { title: 'Sebiann.moe: Projects' })
})

module.exports = router
