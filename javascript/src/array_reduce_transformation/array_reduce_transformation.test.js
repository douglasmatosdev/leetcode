// https://leetcode.com/problems/array-reduce-transformation/description/
const { reduce } = require('./array_reduce_transformation.js')

describe('array_reduce_transformation', () => {
    test('Case 1 ', () => {
        const fn = function sum(accum, curr) { return accum + curr; }
        expect(reduce([1, 2, 3, 4], fn, 0)).toEqual(10)
    });

    test('Case 2 ', () => {
        const fn = function sum(accum, curr) { return accum + curr * curr; }
        expect(reduce([1, 2, 3, 4], fn, 100)).toEqual(130)
    });

    test('Case 3 ', () => {
        const fn = function sum(accum, curr) { return 0; }
        expect(reduce([], fn, 25)).toEqual(25)
    });
});
