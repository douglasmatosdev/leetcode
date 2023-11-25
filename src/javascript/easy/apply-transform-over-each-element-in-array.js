// https://leetcode.com/problems/apply-transform-over-each-element-in-array/

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let result = [];

    for (const [index, item] of arr.entries()) {
        const value = fn(item, index);
        result.push(value);
    }

    return result;
};  

var arr = [1,2,3];
var fn = function plusone(n) { return n + 1; };

var result = map(arr, fn);
console.clear();
console.log(result);