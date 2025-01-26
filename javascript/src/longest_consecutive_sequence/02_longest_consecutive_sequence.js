// https://leetcode.com/problems/longest-consecutive-sequence/description/


/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    const nums_set = new Set(nums)

    const sequence = [new Set()]
    let sequenceSize = 0

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]
        if (!sequence[0].has(num)) {
            let currentSequence = new Set()
            let currentNum = num
            while (nums_set.has(currentNum)) {
                currentSequence.add(currentNum)
                currentNum++
            }

            sequence.push(currentSequence)
            sequenceSize = Math.max(sequenceSize, currentSequence.size)
        }
        
    }


    return sequenceSize
};

module.exports = longestConsecutive

