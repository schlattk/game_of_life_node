'use strict'
const Game = require('../models/game.js')
const initializer = (function () {
  let game1
  let init = function () {
    game1 = new Game(40, 40)
    game1.seed(0.65)
    return game1.print()
  }
  let oneStep = function () {
    game1.move()
    return game1.print()
  }
  let blank = function () {
    game1 = new Game(40, 40)
    game1.seed(1);
    return game1.print()
  }
  return {
    init: init,
    oneStep: oneStep,
    blank: blank
  }
})()
module.exports = initializer
