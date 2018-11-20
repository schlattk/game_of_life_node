const Game = require('../models/game.js')
const fieldsToCheck = require('../models/fieldsToCheck.js')
describe('FieldsToCheck', () => {
  it('should return the correct fields example 1 => 5', () => {
    let game = new Game(5, 5)
    let fields = fieldsToCheck.fields(game.grid, 0, 0)
    expect(fields.length).toEqual(5)
  })
  it('should return the correct fields example 2 => 8', () => {
    let game = new Game(5, 5)
    let fields = fieldsToCheck.fields(game.grid, 2, 2)
    expect(fields.length).toEqual(8)
  })
})
