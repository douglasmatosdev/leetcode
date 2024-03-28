// https://leetcode.com/problems/array-prototype-last/description/
require('./array_prototype_last.js')

describe('array_prototype_last', () => {
    test('should return 3 when input is [1, 2, 3]', () => {
        const arr = [1, 2, 3];
        expect(arr.last()).toEqual(3)
    });
});

