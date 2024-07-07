// https://leetcode.com/problems/filter-elements-from-array/description/
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
    let result = [];

    for (const [index, item] of arr.entries()) {
        const value = fn(item, index);
        
        if (value) {
            result.push(item);
        }
    }


    return result;
};

module.exports = { filter }