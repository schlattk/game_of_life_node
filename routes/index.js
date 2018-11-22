var express = require('express')
var router = express.Router()
router.get('/', function (req, res, next) {
  res.render('index', {})
})
router.post('/', function (req, res, next) {
  var signal = req.body.move
  if (signal === 'startreset' || signal === 'run')
    { res.redirect('/game_of_life/?move=' + signal) }
  else if (signal === 'make')
    { res.redirect('/game_of_life/make/?move=' + signal) }
})
module.exports = router
