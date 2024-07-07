// https://leetcode.com/problems/find-all-duplicates-in-an-array/description/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates_1 = function (nums) {
    const history = []
    const result = []

    for (let i = 0; i < nums.length; i++) {
        if (!history[nums[i]]) {
            history[nums[i]] = 1
        } else {
            result.push(nums[i])
        }
    }
    return result
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
function findDuplicates_2(nums) {
    const result = []
    const mapping = {}

    for (let i = 0; i < nums.length; i++) {
        if (!mapping[nums[i]]) {
            mapping[nums[i]] = 1
        } else {
            mapping[nums[i]]++
        }

        if (mapping[nums[i]] > 1) {
            result.push(nums[i])
        }
    }
    return result
};

module.exports = {
    findDuplicates_1,
    findDuplicates_2
}