// https://leetcode.com/problems/counter-ii/description/
const { createCounter } = require('./counter_ii.js')

describe('counter_ii', () => {
    test('Case 1 ', () => {
        const counter = createCounter(5)
        
        expect(counter.increment()).toEqual(6)

        expect(counter.reset()).toEqual(5)

        expect(counter.decrement()).toEqual(4)

    });

    test('Case 2 ', () => {
        const counter = createCounter(0)
        
        expect(counter.increment()).toEqual(1)

        expect(counter.increment()).toEqual(2)

        expect(counter.decrement()).toEqual(1)

        expect(counter.reset()).toEqual(0)

        expect(counter.reset()).toEqual(0)
    });
});
