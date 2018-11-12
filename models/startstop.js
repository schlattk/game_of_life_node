'use strict';

const startStop = (function(){
  let starter;

  let run = function() {
        starter = setInterval(initializer.call, 500);
      };
  let stop = function() {
        clearInterval(starter);
      };
  return{ run: run,
          stop: stop
    };
})();

module.exports = startStop;
