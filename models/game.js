'use strict'
const randomizer = require('./randomizer.js')
const scanner = require('./scanner.js')
class Game {
  constructor (height, width) {
    this.height = height
    this.width = width
    this.grid = new Array(height)
    for (let i = 0; i < this.grid.length; i++) { this.grid[i] = new Array(width) };
  };
  seed (number) {
    this.grid.forEach((item) => {
      for (let j = 0; j < item.length; j++) {
        item[j] = randomizer.random(number)
      }
    }
    )
  }
  move () {
    let length = this.grid.length
    let counterGrid = new Array(length)
    for (let i = 0; i < length; i++) { counterGrid[i] = new Array(length) }
    counterGrid.forEach((item) => { for (let j = 0; j < length; j++) { item[j] = 'O' } })
    counterGrid.forEach((item, i) => { for (let j = 0; j < length; j++) { item[j] = scanner.scan(this.grid, i, j) } })
    this.grid.forEach((item, i) => {
      for (let j = 0; j < length; j++) {
        if (this.grid[i][j] === 'X') { counterGrid[i][j] < 2 || counterGrid[i][j] > 3 ? this.grid[i][j] = 'O' : this.grid[i][j] = 'X' } else if (this.grid[i][j] === 'O') { counterGrid[i][j] === 3 ? this.grid[i][j] = 'X' : this.grid[i][j] = 'O' }
      }
    }
    )
  }
  print () {
    let newGrid = new Array(this.grid.length)
    for (let i = 0; i < this.grid[0].length; i++) { newGrid[i] = new Array(this.grid[0].length) }
    let redElement = "<svg class='red' width='15' height='15'><rect width='15' height='15'></svg>"
    let blueElement = "<svg class= 'blue' width='15' height='15'><rect width='15' height='15'></svg>"
    this.grid.forEach((item, i) => {
      for (let j = 0; j < this.grid.length; j++) {
        if (this.grid[i][j] === 'X') { newGrid[i][j] = redElement } else { newGrid[i][j] = blueElement }
      }
    }
    )
    let finalGrid = newGrid.map(item => item.join(''))
    return finalGrid
  }
}
module.exports = Game
