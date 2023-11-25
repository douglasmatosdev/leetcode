// https://leetcode.com/problems/function-composition/

/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    
    return function(x) {
        let r = x;
        for (const fn of functions.reverse()) {
            r = fn(r);
        }
        
        return r;
    };
};


const fn = compose([x => x + 1, x => x * x, x => 2 * x]);
var a = fn(4); // 9
console.log(a);
