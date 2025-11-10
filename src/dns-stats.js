const { NotImplementedError } = require('../lib');

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
    const stats = {};
    
    for (const domain of domains) {
        const parts = domain.split('.').reverse();
        let current = '';
        
        for (const part of parts) {
            current = current ? `${current}.${part}` : `.${part}`;
            
            if (stats[current]) {
                stats[current]++;
            } else {
                stats[current] = 1;
            }
        }
    }
    
    return stats;
}

module.exports = {
  getDNSStats
};
