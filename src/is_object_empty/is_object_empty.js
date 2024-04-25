// https://leetcode.com/problems/is-object-empty/description
/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function (obj) {
    if (obj.constructor.name === 'Array') {
        return obj.length === 0
    } else {
        return Object.keys(obj).length === 0
    }
};

module.exports = { isEmpty }
