const express = require('express')
const router = express.Router()
const initializer = require('../models/initializer.js')
router.get('/', function (req, res, next) {
  let signal = req.query.move
  let display
  switch (signal) {
    case 'startreset':
      display = initializer.init()
      res.render('game_of_life', { display: display })
      break
    case 'run':
      display = initializer.oneStep()
      res.render('game_of_life', { display: display })
      break
    case 'stop':
      console.log('stop')
      break
    default:
      res.send('please go back to homepage')
      break
  }
})
router.get('/make/', function(req, res, next) {
  let display;
  display = initializer.blank()
  res.render('make', { display: display })
})
module.exports = router
