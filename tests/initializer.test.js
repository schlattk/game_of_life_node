var Game = require('../models/game.js');
var initializer = require('../models/initializer.js')

describe('Initializer',()=>{
    it('has two functions',()=>{
      expect(initializer.init).toBeDefined();
      expect(initializer.one_step).toBeDefined();
    });
    it('init returns an array with length 40',()=>{
      expect(initializer.init().length).toBe(40);
      expect(typeof(initializer.init()[0])).toBe('string');
    });
    it('onestep returns a different to init array with length 40',()=>{
      var testArray = initializer.init();
      expect(initializer.one_step()).not.toEqual(testArray);
    });
});
