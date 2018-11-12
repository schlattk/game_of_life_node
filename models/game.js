'use strict';

var initializer = require('./initializer.js');
var fieldsToCheck = require('./fieldsToCheck.js');
var randomizer = require('./randomizer.js');
var scanner = require('./scanner.js');
var printer = require('./printer.js');


class Game {

  constructor(height,width){
    this.height = height;
    this.width = width;
    this.grid = new Array(height);
    for(let i = 0; i < this.grid.length; i ++){this.grid[i] = new Array(width)};
  };

  seed(number){
    this.grid.forEach((item) => {for(let j = 0; j < item.length; j++){
                                item[j] = randomizer.random(number);}
                              }
                    );
  };

  move(){
    var length = this.grid.length;
    var counter_grid = new Array(length);
    for(let i = 0; i < length; i ++){counter_grid[i] = new Array(length)};

    counter_grid.forEach((item) => {for(let j = 0; j < length; j++){item[j] = "O";}});

    counter_grid.forEach((item, i) => {for(let j = 0; j < length; j++){item[j] = scanner.scan(this.grid,i,j);}});

    this.grid.forEach((item, i) => {for(let j = 0; j < length; j++){
                                    if(this.grid[i][j] === "X"){counter_grid[i][j] < 2 || counter_grid[i][j] > 3 ? this.grid[i][j] = "O" : this.grid[i][j] = "X"}
                                    else if (this.grid[i][j] === "O") {counter_grid[i][j] === 3 ? this.grid[i][j] = "X" : this.grid[i][j] = "O"}
                                    }}
                      );
  };

  print(){
    let newGrid = new Array(this.grid.length);
    for(let i = 0; i < this.grid[0].length; i ++){newGrid[i] = new Array(this.grid[0].length)};
    let red_element = '<svg class = "red" width="15" height="15"><rect width="15" height="15"></svg>';
    let blue_element = '<svg class = "blue" width="15" height="15"><rect width="15" height="15"></svg>';
    this.grid.forEach((item, i) => {for(let j = 0; j < this.grid.length; j++){
                                  if(this.grid[i][j] === "X"){newGrid[i][j] = red_element;}
                                  else {newGrid[i][j] = blue_element;}
                                  }}
                    );
    let finalGrid = newGrid.map(item => item.join(""));
    return finalGrid
  };

};

module.exports = Game;
