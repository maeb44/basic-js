const { NotImplementedError } = require('../lib');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const newArr = Array.from({ length: matrix.length }, () => {
    return new Array(matrix[0].length).fill(0);
  });

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === true) {
        neighborsPlus(newArr, i, j);
        // for (let row = i - 1; row <= i + 1; row++) {
        //   for (let col = j - 1; col <= j + 1; col++) {
        //     if (col == j && row == i) continue;
        //     if (matrix[row] && matrix[row][col] !== undefined)
        //       newArr[row][col] += 1;
        //   }
        // }
      }
    }
  }
  function neighborsPlus(matrix, r, c) {
    const rows = matrix.length;
    const cols = matrix[0].length;

    const direction = [
      [-1, -1],
      [-1, 0],
      [-1, 1],
      [0, -1],
      [0, 1],
      [1, -1],
      [1, 0],
      [1, 1],
    ];
    for (const [dr, dc] of direction) {
      const nr = r + dr;
      const nc = c + dc;
      if (nr >= 0 && nr < rows && nc >= 0 && nc < cols) {
        matrix[nr][nc] += 1;
      }
    }
  }
  return newArr;
}

module.exports = {
  minesweeper,
};
