// https://leetcode.com/problems/filter-elements-from-array/

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let result = []; 

    for (const [index, item] of arr.entries()) {
        const value = fn(item, index);
        if (value) {
            result.push(item);
        }
    }

    return result;
};

var arr = [0,10,20,30];
var arr2 = [1,2,3];
var fn = function greaterThan10(n) { return n > 10; };
var fn2 = function firstIndex(n, i) { return i === 0; };

var filteredArr = filter(arr, fn);
var filteredArr2 = filter(arr2, fn2);

console.clear();
console.log(filteredArr);
console.log(filteredArr2);