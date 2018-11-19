var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {});
});

router.post('/', function(req, res, next){
  var signal = req.body.move;
  res.redirect("/game_of_life/?move=" + signal)

});

module.exports = router;
