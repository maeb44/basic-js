const { NotImplementedError } = require('../lib');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let discardNext = false;
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    const prevEl = newArr[newArr.length - 1];
    const nextEl = arr[i + 1];
    if (typeof el === 'string') {
      switch (el) {
        case '--double-next':
          if (i < arr.length - 1) {
            newArr.push(nextEl);
          }
          break;
        case '--double-prev':
          if (prevEl) {
            newArr.push(prevEl);
          }
          break;
        case '--discard-prev':
          if (prevEl) {
            newArr.pop();
          }
          break;
        case '--discard-next':
          if (i < arr.length) {
            discardNext = true;
            newArr.push(null);
            i += 1;
          }
      }
      continue;
    }
    newArr.push(el);
  }
  if (discardNext) return newArr.filter((e) => e !== null);
  return newArr;
}
module.exports = {
  transform,
};
