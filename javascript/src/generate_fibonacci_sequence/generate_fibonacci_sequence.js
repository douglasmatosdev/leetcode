// https://leetcode.com/problems/generate-fibonacci-sequence/description/
/**
 * @return {Generator<number>}
 */
var fibGenerator = function* () {
    let current = a = b = 1;
    yield 0;

    while (true) {
        yield current;

        current = b;
        b = a + b;
        a = current;
    }
};

module.exports = { fibGenerator }
