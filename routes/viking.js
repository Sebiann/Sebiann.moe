/* eslint-disable no-unused-vars */
var express = require('express')
var router = express.Router()

/* GET minecraft/viking page. */
router.get('/minecraft/viking', function (req, res, next) {
  res.render('minecraft/viking', { title: 'Sebiann.moe: Minecraft/Viking' })
})

module.exports = router
