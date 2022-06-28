/* eslint-disable no-unused-vars */
var express = require('express')
var router = express.Router()

/* GET GameShow page. */
router.get('/gameshow', function (req, res, next) {
  res.render('gameshow', { title: 'Sebiann.moe: GameShow' })
})

module.exports = router
