var express = require('express');
var router = express.Router();
var game_of_life_controller = require('../controllers/game_of_life_controller');
var Game = require('../models/game.js');
// var initializer = require('../models/initializer.js');
// var fieldsToCheck = require('../models/fieldsToCheck.js');
// var randomizer = require('../models/randomizer.js');
// var scanner = require('../models/scanner.js');

router.get('/', function(req, res, next) {
  var signal = req.query.move;
  var game = new Game(40,40);
  game.seed(0.65);
  var display = game.print();
  res.render('game_of_life',{display:display});
});

router.post('/', function(req, res, next){
  //res.render('game_of_life',{})
  res.send('Wtf');
});

module.exports = router;
