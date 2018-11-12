var Game = require('../models/game.js');


'use strict';

const initializer = (function(){

  let game = "";

  let init = function(x,y){

        game = new Game(x,y);
        game.seed(0.5);
        game.print();
      };

  let functionCall = function(){
        game.move();
        game.print();
  }
      return{init:init,
             call:functionCall
      };
})();

module.exports = initializer;
