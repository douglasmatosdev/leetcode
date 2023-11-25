// https://leetcode.com/problems/chunk-array/

/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    let result = [];
    
    if (arr.length <= 0) return result;

    let counter = 0;
    for (const item of arr) {
        if (!result[counter]?.length) {
            result.push([item]);
        } else if(result[counter].length < size) {
            result[counter].push(item);
        }

        if (result[counter].length === size) {
            counter++;
        }
    }

    return result;
};

let arr = [1,2,3,4,5];
let size = 3;

let result = chunk(arr, size);
// console.clear();
console.log(result);
