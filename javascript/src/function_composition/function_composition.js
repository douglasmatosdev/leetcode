// https://leetcode.com/problems/function-composition/description/
/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {

    return function (x) {
        let r = x;
        for (const fn of functions.reverse()) {
            r = fn(r);
        }

        return r;
    };
};

module.exports = { compose }