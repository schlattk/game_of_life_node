var express = require('express');
var router = express.Router();
var Game = require('../models/game.js');
var initializer = require('../models/initializer.js')
var startStop= require('../models/startstop.js');
var socketApi = require('../socketApi');
var io = socketApi.io;

router.get('/', function(req, res, next) {
  var signal = req.query.move;
  var display;
  if (signal === 'startreset'){
    display = initializer.init();
    res.render('game_of_life',{display:display});
  }
  else if (signal === 'run'){
      startStop.run();
    }
  else if (signal === 'stop')

    startStop.stop();
});

router.post('/', function(req, res, next){

  res.send('Wtf');
});

module.exports = router;
