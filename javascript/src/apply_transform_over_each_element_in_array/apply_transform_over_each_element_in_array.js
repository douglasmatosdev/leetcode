// https://leetcode.com/problems/apply-transform-over-each-element-in-array/description/

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
    let result = [];

    for (const [index, item] of arr.entries()) {
        const value = fn(item, index);
        result.push(value);
    }

    return result;
};

module.exports = { map }