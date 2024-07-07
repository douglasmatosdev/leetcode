// https://leetcode.com/problems/counter-ii/description/
/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
    let initialValue = init;
    let value = initialValue;

    return {
        increment() {
            value++;
            return value
        },
        decrement() {
            value--;
            return value;
        },
        reset() {
            value = initialValue;
            return value;
        }
    }

};

module.exports = { createCounter }
