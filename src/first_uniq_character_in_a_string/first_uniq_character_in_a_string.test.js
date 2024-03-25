const { firstUniqChar_1, firstUniqChar_2 } = require("./first_uniq_character_in_a_string")

describe('first_uniq_character_in_a_string', () => {
    describe('1. Implementation', () => {
        it('should return index "0" when input is "leetcode"', () => {
            expect(firstUniqChar_1('leetcode')).toBe(0)
        });

        it('should return index "2" when input is "loveleetcode"', () => {
            expect(firstUniqChar_1('loveleetcode')).toBe(2)
        });

        it('should return "-1" when input is "aabb"', () => {
            expect(firstUniqChar_1('aabb')).toBe(-1)
        });
    });

    describe('2. Implementation', () => {
        it('should return index "0" when input is "leetcode"', () => {
            expect(firstUniqChar_2('leetcode')).toBe(0)
        });

        it('should return index "2" when input is "loveleetcode"', () => {
            expect(firstUniqChar_2('loveleetcode')).toBe(2)
        });

        it('should return "-1" when input is "aabb"', () => {
            expect(firstUniqChar_2('aabb')).toBe(-1)
        });
    });

});