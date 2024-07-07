// https://leetcode.com/problems/apply-transform-over-each-element-in-array/description/
const { map } = require('./apply_transform_over_each_element_in_array.js')

describe('apply_transform_over_each_element_in_array', () => {
    test('Case 1 ', () => {
        function plusone(n) { return n + 1; }

        const result = map([1, 2, 3], plusone)

        expect(result).toEqual([2, 3, 4])
    });

    test('Case 2 ', () => {
        function plusI(n, i) { return n + i; }

        const result = map([1, 2, 3], plusI)

        expect(result).toEqual([1, 3, 5])
    });

    test('Case 3 ', () => {
        function constant(n, i) { return 42; }

        const result = map([10, 20, 30], constant)

        expect(result).toEqual([42, 42, 42])
    });
});
