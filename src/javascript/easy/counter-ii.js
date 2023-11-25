// https://leetcode.com/problems/counter-ii/

/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let initialValue = init;
    let value = initialValue;

    return {
        increment() {
            value++;
            
            return value;
        },
        decrement() {
            value--;
            
            return value;
        },
        reset() {
            value = initialValue;
            
            return value;
        }
    };
    
};

const counter = createCounter(5);
counter.increment(); // 6
counter.reset(); // 5
counter.decrement(); // 4
