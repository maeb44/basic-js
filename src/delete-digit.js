const { NotImplementedError } = require('../lib');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
	let num =(''+n).split('');
  for(let i=0;i<num.length;i++){
    if(i==num.length-1){
			num.splice(i,1);
		}
    if(+num[i]<(+num[i+1])){
			num.splice(i,1);
			console.log(num)
			break
    }
  }
	return +num.join('')
}

module.exports = {
  deleteDigit
};
