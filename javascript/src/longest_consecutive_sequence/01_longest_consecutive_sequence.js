// https://leetcode.com/problems/longest-consecutive-sequence/description/


// Solution O^3
const nums = [100, 4, 200, 1, 3, 2]

const sequence = []
for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
        if (nums[i] + 1 === nums[j]) {

            let hasI = false
            let hasJ = false
            for (const s of sequence) {
                if (s === nums[i]) {
                    hasI = true
                }

                if (s === nums[j]) {
                    hasJ = true
                }
            }

            if (!hasI) {
                sequence.push(nums[i])
            }
            if (!hasJ) {
                sequence.push(nums[j])
            }
        }
    }
}

console.log(sequence)

// 100+1 === 100 false
// 100+1 === 4 false
// 100+1 === 200 false
// 100+1 === 1 false
// 100+1 === 3 false
// 100+1 === 2 false

// 4+1 === 100 false
// 4+1 === 4 false
// 4+1 === 200 false
// 4+1 === 1 false
// 4+1 === 3 false
// 4+1 === 2 false

// 200+1 === 100 false
// 200+1 === 4 false
// 200+1 === 200 false
// 200+1 === 1 false
// 200+1 === 3 false
// 200+1 === 2 false

// 1+1 === 100 false
// 1+1 === 4 false
// 1+1 === 200 false
// 1+1 === 1 false
// 1+1 === 3 false
// 1+1 === 2 true

// 3+1 === 100 false
// 3+1 === 4 true
// 3+1 === 200 false
// 3+1 === 1 false
// 3+1 === 3 false
// 3+1 === 2 true

// 2+1 === 100 false
// 2+1 === 4 true
// 2+1 === 200 false
// 2+1 === 1 false
// 2+1 === 3 true
// 2+1 === 2 true
