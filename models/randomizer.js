'use strict';

const randomizer = (function(){
  let random = function(number){
      return Math.random() > number ? "X" : "O";
  };
  return{random: random};
})();

module.exports = randomizer;
