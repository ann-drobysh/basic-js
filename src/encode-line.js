const { NotImplementedError } = require('../extensions/index.js');

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
  let arrayOfLetters = str.split('');
  let encodedString = '';
  let counterOfLetters = 1;
  for (let i = 0; i < arrayOfLetters.length; i++) {
    if (arrayOfLetters[i] == arrayOfLetters[i+1]) {        
      counterOfLetters += 1;
    } else {
      if (counterOfLetters == 1) {
        encodedString += arrayOfLetters[i];
    } else {
      encodedString += counterOfLetters + arrayOfLetters[i];
      counterOfLetters = 1;
    }
    
  }
}
return encodedString;
}

module.exports = {
  encodeLine
};
