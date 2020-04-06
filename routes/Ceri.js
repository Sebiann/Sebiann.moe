/* eslint-disable no-unused-vars */
var express = require('express')
var router = express.Router()

/* GET minecraft/viking page. */
router.get('/minecraft/Ceri', function (req, res, next) {
  res.render('minecraft/Ceri', { title: 'Sebiann.moe: Minecraft/CeriCraft' })
})

module.exports = router
