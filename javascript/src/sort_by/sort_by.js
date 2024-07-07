// https://leetcode.com/problems/sort-by/description/
/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function (arr, fn) {
    return arr.filter(a => Number.isFinite(fn(a))).sort((a, b) => fn(a) - fn(b));
};

module.exports = { sortBy }
