/* eslint-disable no-unused-vars */
var express = require('express')
var router = express.Router()

/* GET minecraft/viking page. */
router.get('/minecraft/ceri/members', function (req, res, next) {
  res.render('minecraft/ceri/members', { title: 'Sebiann.moe: CeriCraft Members' })
})

module.exports = router
