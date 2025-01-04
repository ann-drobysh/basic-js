const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
 const domains1 = domains.map((str) => {
  arrayFromDomain = str.split('.');
  reversedArrayFromDomain = arrayFromDomain.reverse();
  return reversedArrayFromDomain;
 });

let domains2 = domains1.map((element) => element.map((el) => '.' + el));

for (let i = 0; i < domains2.length; i++) {
  for (let j = 1; j < domains2[i].length; j++) {
    domains2[i][j] = domains2[i][j-1] + domains2[i][j];
  }
}

let domainsAppearance = {};

domains2.forEach((element) => element.forEach((innerElement) => 
{if (domainsAppearance[innerElement]) {
  domainsAppearance[innerElement] += 1;
} else {
  domainsAppearance[innerElement] = 1;
}
}))

return domainsAppearance;

}



module.exports = {
  getDNSStats
};
