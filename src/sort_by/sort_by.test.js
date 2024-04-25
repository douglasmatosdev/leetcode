// https://leetcode.com/problems/sort-by/description/

const { sortBy } = require("./sort_by");


describe('sort_by', () => {
    test('Case 1 ', () => {
        expect(sortBy([5, 4, 1, 2, 3], (x) => x)).toEqual([1, 2, 3, 4, 5])
    });

    test('Case 2 ', () => {
        expect(sortBy([{ "x": 1 }, { "x": 0 }, { "x": -1 }], (x) => x.x)).toEqual([{ "x": -1 }, { "x": 0 }, { "x": 1 }])
    });

    test.only('Case 3 ', () => {
        expect(sortBy([[3, 4], [5, 2], [10, 1]], (x) => x[1])).toEqual([[10, 1], [5, 2], [3, 4]])
    });
});
