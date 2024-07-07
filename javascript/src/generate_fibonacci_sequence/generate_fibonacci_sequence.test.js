// https://leetcode.com/problems/generate-fibonacci-sequence/description/
const { fibGenerator } = require('./generate_fibonacci_sequence.js')

describe('generate_fibonacci_sequence', () => {
    test('Case 1 - Call count 5', () => {

        const gen = fibGenerator();

        expect(gen.next().value).toEqual(0); // 0
        expect(gen.next().value).toEqual(1); // 1
        expect(gen.next().value).toEqual(1); // 1
        expect(gen.next().value).toEqual(2); // 2
        expect(gen.next().value).toEqual(3); // 3
    });

    test('Case 2 - call count 0', () => {
        const gen = fibGenerator();

        expect(gen.next().value).toEqual(0); // 0
    });
});
