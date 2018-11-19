var Game = require('../models/game.js');
var randomizer = require('../models/randomizer.js');

describe("Randomizer", () => {
  it("should return a X or O based on a seed example => O ", () => {
    var game = new Game(5,5);
    var fill = randomizer.random(1);
    expect(fill).toEqual("O");
  });
  it("should return a X or O based on a seed example => X ", () => {
    var game = new Game(5,5);
    var fill = randomizer.random(0);
    expect(fill).toEqual("X");
  });
});
