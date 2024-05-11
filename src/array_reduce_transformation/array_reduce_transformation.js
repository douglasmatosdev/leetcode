// https://leetcode.com/problems/array-reduce-transformation/description/
/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
    if (nums && nums.length <= 0) return init;

    let accum = init;

    for (const value of nums) {
        accum = fn(accum, value);
    }

    return accum;
};

module.exports = { reduce }