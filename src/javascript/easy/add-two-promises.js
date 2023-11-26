// https://leetcode.com/problems/add-two-promises/

/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
    let num1 = await promise1.then(e => e);
    let num2 = await promise2.then(e => e);

    return num1 + num2;
};


addTwoPromises(Promise.resolve(2), Promise.resolve(2))
    .then(console.log); // 4
