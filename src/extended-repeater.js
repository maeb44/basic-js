const { NotImplementedError } = require('../lib');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  const separator = options?.separator || '+';
  const repeat = options?.repeatTimes || 1;
  const additionSeparator = options?.additionSeparator ?? '|';
  let addition = '';
  if (Object.hasOwn(options, 'addition')) addition = options.addition;
  const additionRepeat = options?.additionRepeatTimes || 1;

  const addStr = (addition + additionSeparator)
    .repeat(additionRepeat)
    .slice(0, -additionSeparator.length);
  const result = (str + addStr + separator)
    .repeat(repeat)
    .slice(0, -separator.length);
  return result;
}

module.exports = {
  repeater,
};
