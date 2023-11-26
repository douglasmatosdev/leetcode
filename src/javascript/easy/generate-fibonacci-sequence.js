// https://leetcode.com/problems/generate-fibonacci-sequence/

/**
 * @return {Generator<number>}
 */
var fibGenerator = function*() {
    let a = 1;
    let b = a;
    let current = a ;

    yield 0; 

    while (true) {
        yield current;
        
        current = b;
        b = a + b;
        a = current;
    }
};


const gen = fibGenerator();
let result = gen.next().value; // 0
let result2 = gen.next().value; // 1
let result3 = gen.next().value; // 1
let result4 = gen.next().value; // 2
let result5 = gen.next().value; // 3

console.log(result);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);
