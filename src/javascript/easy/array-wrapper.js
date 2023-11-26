// https://leetcode.com/problems/array-wrapper/

/**
 * @param {number[]} nums
 * @return {void}
 */
var ArrayWrapper = function(nums) {
    this.value = nums;
};

/**
 * @return {number}
 */
ArrayWrapper.prototype.valueOf = function() {
    return this.value.reduce((acc, cur) => acc+cur, 0);
};

/**
 * @return {string}
 */
ArrayWrapper.prototype.toString = function() {
    return JSON.stringify(this.value);
};


const obj1 = new ArrayWrapper([]);
const obj2 = new ArrayWrapper([]);
console.log(obj1);
console.log(obj2);
console.log(obj1 + obj2); // 10
console.log(String(obj1)); // "[1,2]"
console.log(String(obj2)); // "[3,4]"
