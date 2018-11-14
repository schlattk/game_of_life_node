'use strict';
var Game = require('../models/game.js');
var initializer = require('../models/initializer.js')
var socketApi = require('../socketApi');
var io = socketApi.io;

const startStop = (function(){
  let starter;
  let field;
  let run = function() {
    starter = setInterval(function() {
      field = initializer.one_step();
      var id;
      io.emit('data', field);
      }, 1000);
  };

  let stop = function() {
        clearInterval(starter);
      };
  return{ run: run,
          stop: stop
    };
})();

module.exports = startStop;
