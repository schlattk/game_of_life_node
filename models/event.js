'use strict';

const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

resetButton.addEventListener('click',function(){initializer.init(40,40)});
startButton.addEventListener('click',startStop.run);
stopButton.addEventListener('click',startStop.stop);
