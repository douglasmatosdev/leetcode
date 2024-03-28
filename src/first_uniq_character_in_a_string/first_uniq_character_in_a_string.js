// https://leetcode.com/problems/first-unique-character-in-a-string/description/
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar_1 = function (s) {
    for (let i = 0; i < s.length; i++) {
        let index = i

        for (let j = 0; j < s.length; j++) {
            if (i !== j && s[i] === s[j]) {
                index = -1
                continue
            }
        }

        if (index !== -1) {
            return index
        }
    }

    return -1
};

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar_2 = function (s) {
    const m = new Map()

    for (const r of s) {
        if (!m.has(r)) {
            m.set(r, 0)
        }
        m.set(r, m.get(r) + 1)
    }

    for (let i = 0; i < s.length; i++) {
        if (m.get(s[i]) === 1) {
            return i
        }
    }

    return -1
};

module.exports = {
    firstUniqChar_1,
    firstUniqChar_2
}