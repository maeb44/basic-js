const { NotImplementedError } = require('../lib');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const lengthOfEl = matrix[0].length;
  if (!lengthOfEl) return false;
  const flatMatrix = matrix.flat();
  return flatMatrix.reduce((acc, el, index, arr) => {
    const prevEl = arr[index - lengthOfEl]; //первая строчка будет равняться undefined это фича!)
    if (prevEl !== 0) return acc + el;
    return acc;
  }, 0);
}

console.log(
  getMatrixElementsSum([
    [1, 1],
    [0, 2],
    [3, 3],
  ]),
);

module.exports = {
  getMatrixElementsSum,
};
