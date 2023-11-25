// https://leetcode.com/problems/array-reduce-transformation/

/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    if (nums && nums.length <= 0) return init;

    let accum = init;

    for (const value of nums) {
        accum = fn(accum, value);
    }

    return accum;
};

var nums = [1,2,3,4];
var init = 0;
var fn = function sum(accum, curr) { return accum + curr; };
var r = reduce(nums, fn, init);
console.log(r);
