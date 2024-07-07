// https://leetcode.com/problems/function-composition/description/
const {compose} = require('./function_composition.js')

describe('function_composition', () => {
    test('Case 1 ', () => {
        const fn = compose([x => x + 1, x => x * x, x => 2 * x])
        expect(fn(4)).toEqual(65)
    });

    test('Case 2 ', () => {
        const fn = compose([x => x + 1, x => x * x, x => 2 * x])
        expect(fn(1)).toEqual(5)
    });

    test('Case 3 ', () => {
        const fn = compose([])
        expect(fn(42)).toEqual(42)
    });
});
