'use strict'
var fieldsToCheck = require('../models/fieldsToCheck.js')
const scanner = (function () {
  let scan = function (grid, x, y) {
    let liveNeighbours = 0
    let fields = fieldsToCheck.fields(grid, x, y)
    fields.forEach((item) => { if (item === 'X') { liveNeighbours++ } })
    return liveNeighbours
  }
  return { scan: scan }
})()
module.exports = scanner
