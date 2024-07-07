// https://leetcode.com/problems/counter/description/
const { createCounter } = require('./counter.js')

describe('counter', () => {
    test('Case 1 ', () => {
        const counter = createCounter(10)
        expect(counter()).toEqual(10)
        expect(counter()).toEqual(11)
        expect(counter()).toEqual(12)
    });

    test('Case 2 ', () => {
        const counter = createCounter(-2)
        expect(counter()).toEqual(-2)
        expect(counter()).toEqual(-1)
        expect(counter()).toEqual(0)
        expect(counter()).toEqual(1)
        expect(counter()).toEqual(2)
    });
});
