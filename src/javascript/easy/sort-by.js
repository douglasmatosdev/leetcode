// https://leetcode.com/problems/sort-by/

/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function(arr, fn) {
    return arr.filter(a => Number.isFinite(fn(a))).sort((a, b) => fn(a) - fn(b));
};

// 1° Test
let arr = [5, 4, 1, 2, 3];
let fn = (x) => x;
let sortedArr = sortBy(arr, fn);
console.log(sortedArr);

// 2° Test
let arr2 = [{"x":1},{"x": 0},{"x": -1}];
let fn2 = (x) => x.x;
let sortedArr2 = sortBy(arr2, fn2);
console.log(sortedArr2);

// 3° Test
let arr3 = [[3,4],[5,2],[10,1]];
let fn3 = (x) => x[1];
let sortedArr3 = sortBy(arr3, fn3);
console.log(sortedArr3);

// 4° Test
let arr4 = [1, 0, -1];
let fn4 = (x) => x;
let sortedArr4 = sortBy(arr4, fn4);
console.log(sortedArr4);