// https://leetcode.com/problems/interval-cancellation/

/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function(fn, args, t) {
    fn(...args);

    let timer = setInterval(() => {
        fn(...args);
    }, t);
    
    return function() {
        clearInterval(timer);
    };
};

// 1° test
const result = [];
const fn = (x) => x * 2;
const args = [4], t = 35, cancelT = 190;
const start = performance.now();
const log = (...argsArr) => {
    const diff = Math.floor(performance.now() - start);
    result.push({"time": diff, "returned": fn(...argsArr)});
};
const cancel = cancellable(log, args, t);
setTimeout(() => {
    cancel();
}, cancelT);
setTimeout(() => {
    console.log(result);
}, cancelT + t + 15);    

// 2° test
const result2 = [];
const fn2 = (x1, x2, x3, x4) => (x1.concat(x2).concat(x3).concat(x4));
const args2 = [[7,3],[1,6],[9,1],[5,2]], t2=35, cancelT2=225;
const start2 = performance.now();
const log2 = (...argsArr) => {
    const diff = Math.floor(performance.now() - start2);
    result2.push({"time": diff, "returned": fn2(...argsArr)});
};
const cancel2 = cancellable(log2, args2, t2);
setTimeout(() => {
    cancel2();
}, cancelT2);
setTimeout(() => {
    console.log(result2);  // [
        
}, cancelT2 + t2 + 15);    
    