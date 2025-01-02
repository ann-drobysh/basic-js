const { NotImplementedError } = require('../extensions/index.js');

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
//   let arrayOfInitialDigits = Array.from(String(n), Number);
//   let arrayWithRemovedElement = [];
//   let maxNumber = 0;
//   for (let i = 0; i < arrayOfInitialDigits.length; i++) {
//     arrayWithRemovedElement = arrayOfInitialDigits.slice(i+1);
//     numberToCompare = Number(arrayWithRemovedElement.toString());
//     if (numberToCompare > maxNumber) {
//       maxNumber = numberToCompare;
//     }
//   }
// return maxNumber;
  let convertNumtoString = n.toString();
  let stringToCompare = '';
  let maxNumber = 0;
  for (let i = 0; i < convertNumtoString.length; i++) {
    stringToCompare = convertNumtoString.substring(0, i) + convertNumtoString.substring(i+1, convertNumtoString.length);    
    if (Number(stringToCompare) > maxNumber) {
      maxNumber = Number(stringToCompare);      
    }
  }
 return maxNumber;
}

module.exports = {
  deleteDigit
};
