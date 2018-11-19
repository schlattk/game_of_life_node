var Game = require('../models/game.js');
var fieldsToCheck = require('../models/fieldsToCheck.js')

describe("FieldsToCheck", () => {
  it("should return the correct fields example 1 => 5", () => {
    var game = new Game(5,5);
    var fields = fieldsToCheck.fields(game.grid,0,0);
    expect(fields.length).toEqual(5);
  });
  it("should return the correct fields example 2 => 8", () => {
    var game = new Game(5,5);
    var fields = fieldsToCheck.fields(game.grid,2,2);
    expect(fields.length).toEqual(8);
  });
});
