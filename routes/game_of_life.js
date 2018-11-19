var express = require('express');
var router = express.Router();
var Game = require('../models/game.js');
var initializer = require('../models/initializer.js')

router.get('/', function(req, res, next) {
  var signal = req.query.move;
  var display;
    switch (signal){
     case 'startreset':
       display = initializer.init();
       res.render('game_of_life',{display:display});
       break
      case 'run':
       display = initializer.one_step();
       res.render('game_of_life', {display:display});
       break
      default:
        console.log('stop');
    };
});

module.exports = router;
