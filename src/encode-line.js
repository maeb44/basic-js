const { NotImplementedError } = require('../lib');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(str) {
	sum=1;
	newStr='';
	for(let i = 0; i<str.length;i++){
		if(str[i]===str[i+1]){
			sum++;
		}
		if(str[i]!==str[i+1]){
			if(sum===1){
				newStr+=str[i];
				continue;
			}
			newStr+=sum+str[i];
			sum=1;
}
}
return newStr
}

module.exports = {
  encodeLine
};
