// https://leetcode.com/problems/to-be-or-not-to-be/

/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    
    return {
        toBe(params) {
            if (val !== params) throw new Error("Not Equal");
            
            return true;
        },
        notToBe(params) {
            if (val === params) throw new Error("Equal");

            return  true;
        },
    };
};


console.log(expect(5).toBe(5)); // true
console.log(expect(5).notToBe(5)); // throw "Equal"
console.log(expect(5).toBe(null)); // "Not Equal"
console.log(expect(5).notToBe(null));// true
const o = {};
console.log(expect(o).notToBe(o)); // throw "Equal"