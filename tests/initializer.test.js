const Game = require('../models/game.js')
const initializer = require('../models/initializer.js')
describe('Initializer', () => {
  it('has two functions', () => {
    expect(initializer.init).toBeDefined()
    expect(initializer.oneStep).toBeDefined()
    expect(initializer.blank).toBeDefined()
  })
  it('init returns an array with length 40', () => {
    expect(initializer.init().length).toBe(40)
    expect(typeof (initializer.init()[0])).toBe('string')
  })
  it('onestep returns a different to init array with length 40', () => {
    let testArray = initializer.init()
    expect(initializer.oneStep()).not.toEqual(testArray)
  })
  it('blank() returns a blank array', () => {
    let testArray = initializer.init()
    expect(initializer.blank()).not.toContain("0");
  })
})
