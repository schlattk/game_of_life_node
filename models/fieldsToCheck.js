'use strict'
const fieldsToCheck = (function () {
  let checkFields = function (grid, x, y) {
    let fields = [grid[x][y - 1], grid[x][y + 1]]
    if (grid[x - 1]) { fields.push(grid[x - 1][y], grid[x - 1][y - 1], grid[x - 1][y + 1]) }
    if (grid[x + 1]) { fields.push(grid[x + 1][y], grid[x + 1][y + 1], grid[x + 1][y - 1]) }
    return fields
  }
  return { fields: checkFields }
})()

module.exports = fieldsToCheck
