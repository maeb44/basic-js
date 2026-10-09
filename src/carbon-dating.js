const { NotImplementedError } = require('../lib');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string' || sampleActivity.trim() === '') {
    return false;
  }
  const activity = Number(sampleActivity);
  if (
    !Number.isFinite(activity) ||
    activity > MODERN_ACTIVITY ||
    activity <= 0
  ) {
    return false;
  }
  console.log(activity);
  const period = Math.log(MODERN_ACTIVITY / activity);
  const log = Math.log(2);
  const result = Math.ceil((HALF_LIFE_PERIOD * period) / log);
  return result;
}

console.log(dateSample('15'));
module.exports = {
  dateSample,
};
