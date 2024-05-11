// https://leetcode.com/problems/sleep/description/
const { sleep } = require('./sleep.js')

describe('sleep', () => {

    test('Case 1 ', async () => {
        let t = Date.now(0)
        expect(await sleep(100).then(() => Date.now() - t) >= 100).toBeTruthy()
    });

    test('Case 2 ', async () => {
        let t = Date.now(0)
        expect(await sleep(200).then(() => Date.now() - t) >= 200).toBeTruthy()
    });
});
