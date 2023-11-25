// https://leetcode.com/problems/allow-one-function-call/

/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    
    const history = [];
    
    return function(...args){
        let result;
        if (history.length <= 0) {
            result = fn(...args);
            history.push(args);
        } else {
            result = undefined;
        }
        
        return result;
    };
};

// Test one
let fn = (a,b,c) => (a + b + c);
let onceFn = once(fn);
let result1 = onceFn(1,2,3); // 6
let result2 = onceFn(2,3,6); // returns undefined without calling fn
console.log("Test one\n--------");
console.log(result1);
console.log(result2);

// Test two
let fn2 = (a,b,c) => (a * b * c);
let onceFn2 = once(fn2);
let result3 = onceFn2(5,7,4);
let result4 = onceFn2(2,3,6);
let result5 = onceFn2(4,6,8);
console.log("\n\n\n\n\n");
console.log("Test two\n--------");
console.log(result3);
console.log(result4);
console.log(result5);


