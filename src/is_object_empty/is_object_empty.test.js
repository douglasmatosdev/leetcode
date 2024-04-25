// https://leetcode.com/problems/is-object-empty/description

const { isEmpty } = require("./is_object_empty");

describe('is_object_empty', () => {
    test('Case 1 ', () => {
        expect(isEmpty({ "x": 5, "y": 42 })).toBe(false)
    });

    test('Case 2 ', () => {
        expect(isEmpty({})).toBe(true)
    });

    test('Case 3 ', () => {
        expect(isEmpty([null, false, 0])).toBe(false)
    });
});
