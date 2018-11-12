var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var signal = req.query.move;
  res.render('game_of_life', {signal : signal});
});

router.post('/', function(req, res, next){
  //res.render('game_of_life',{})
  res.send('Wtf');
});

module.exports = router;
