'use strict';
var Game = require('../models/game.js');

const initializer = (function(){
  let game1;

  let init = function(){

    game1 = new Game(40,40);
    game1.seed(0.65);
    return game1.print();
  };

  let one_step = function(){
    game1.move();
    return game1.print();
  };

  return{
      init:init,
      one_step: one_step
    }
})();

module.exports = initializer;
