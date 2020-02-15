var express = require('express')
var router = express.Router()

/* GET minecraft page. */
router.get('/minecraft', function (req, res, next) {
  res.render('minecraft', { title: 'Sebiann.moe: Minecraft' })
})

module.exports = router
