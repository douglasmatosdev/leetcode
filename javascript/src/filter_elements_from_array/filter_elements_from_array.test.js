// https://leetcode.com/problems/filter-elements-from-array/description/
const { filter } = require('./filter_elements_from_array.js')

describe('filter_elements_from_array', () => {
    test('Case 1 ', () => {
        function greaterThan10(n) { return n > 10; }

        const result = filter([0, 10, 20, 30], greaterThan10)

        expect(result).toEqual([20, 30])
    });

    test('Case 2 ', () => {
        function firstIndex(n, i) { return i === 0; }

        const result = filter([1, 2, 3], firstIndex)

        expect(result).toEqual([1])
    });

    test('Case 3 ', () => {
        function plusOne(n) { return n + 1 }

        const result = filter([-2, -1, 0, 1, 2], plusOne)

        expect(result).toEqual([-2, 0, 1, 2])
    });
});
