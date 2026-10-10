const { NotImplementedError } = require('../lib');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates depth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    const childDepths = arr
      .filter(Array.isArray)
      .map((el) => this.calculateDepth(el));

    const maxChild = childDepths.length ? Math.max(...childDepths) : 0;

    return 1 + maxChild;
    // let max = 1;
    // arr.forEach((element) => {
    //   if (Array.isArray(element)) {
    //     let res = 1;
    //     res += this.calculateDepth(element);
    //     max = Math.max(max, res);
    //   }
    // });
    // return max;
  }
}

const depthCalc = new DepthCalculator();
console.log(depthCalc.calculateDepth([[1, [[]]], [[]]]));
module.exports = {
  depthCalculator: new DepthCalculator(),
};
