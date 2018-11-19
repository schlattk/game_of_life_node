'use strict';
var Game = require('../models/game.js');
var initializer = require('../models/initializer.js')
// var socketApi = require('../socketApi');
// var io = socketApi.io;

var socket_io = require('socket.io');
var io = socket_io();
var socketApi = {};
socketApi.io = io;
var id;
io.on('connection', function(socket){
    console.log('A user connected');
    id = socket.id;
});

socketApi.sendNotification = function() {
    io.sockets.emit('hello', {msg: 'Hello World!'});
}

const startStop = (function(){
  let starter;
  let field;
  let run = function() {
    starter = setInterval(function() {
      field = initializer.one_step();
      // console.log(id);
      // io.to(id).emit('data', field);

      }, 1000);
  };

  let stop = function() {
        clearInterval(starter);
      };
  return{ run: run,
          stop: stop
    };
})();

exports.startStop = startStop;
exports.socketApi = socketApi;
