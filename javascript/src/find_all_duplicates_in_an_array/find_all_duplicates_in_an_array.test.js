// https://leetcode.com/problems/find-all-duplicates-in-an-array/description/
const { findDuplicates_1, findDuplicates_2 } = require('./find_all_duplicates_in_an_array')

describe('find_all_duplicates_in_an_array', () => {

    describe('Solution 1', () => {
        it('findDuplicates', () => {
            expect(findDuplicates_1([4, 3, 2, 7, 8, 2, 3, 1])).toEqual([2, 3])
            expect(findDuplicates_1([1, 1, 2])).toEqual([1])
            expect(findDuplicates_1([1])).toEqual([])
        });
    });

    describe('Solution 2', () => {
        it('findDuplicates', () => {
            expect(findDuplicates_2([4, 3, 2, 7, 8, 2, 3, 1])).toEqual([2, 3])
            expect(findDuplicates_1([1, 1, 2])).toEqual([1])
            expect(findDuplicates_1([1])).toEqual([])
        });
    });
});