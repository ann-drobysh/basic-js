const { NotImplementedError } = require('../extensions/index.js');

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
  let sampleActivityValue = Number(sampleActivity);  
  if (isNaN(sampleActivityValue) || typeof(sampleActivity) != 'string' || sampleActivityValue === 0 || sampleActivityValue > 5730 || sampleActivityValue < 0) {
    return false;
  } else {
    const t = ((Math.log(MODERN_ACTIVITY /sampleActivityValue)) * HALF_LIFE_PERIOD) / 0.693;
    if (t < 0) {
      return false;
    } else {
            return Math.ceil(t);}

    }
    
}

module.exports = {
  dateSample
};
