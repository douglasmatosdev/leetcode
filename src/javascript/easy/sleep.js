// https://leetcode.com/problems/sleep/description/

/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
    return new Promise((resolveOuter) => {
        resolveOuter(
            new Promise((resolveInner) => {
                setTimeout(resolveInner, millis);
            }),
        );
    });
}

let t = Date.now();
sleep(100).then(() => console.log(Date.now() - t));