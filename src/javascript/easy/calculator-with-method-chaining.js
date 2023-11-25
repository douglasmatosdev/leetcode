// https://leetcode.com/problems/calculator-with-method-chaining/

class Calculator {

    /** 
     * @param {number} value
     */
    constructor(value) {
        this.value = value;
    }

    /** 
     * @param {number} value
     * @return {Calculator}
     */
    add(value) {
        this.value += value;
        
        return new Calculator(this.value);
    }

    /** 
     * @param {number} value
     * @return {Calculator}
     */
    subtract(value) {
        this.value -= value;
        
        return new Calculator(this.value);
    }

    /** 
     * @param {number} value
     * @return {Calculator}
     */
    multiply(value) {
        this.value *= value;
        
        return new Calculator(this.value);
    }

    /** 
     * @param {number} value
     * @return {Calculator}
     */
    divide(value) {
        this.value = this.value /= value;
        
        return new Calculator(this.value);
    }

    /** 
     * @param {number} value
     * @return {Calculator}
     */
    power(value) {
        this.value = Math.pow(this.value, value);
        
        return new Calculator(this.value);
    }

    /** 
     * @return {number}
     */
    getResult() {
        return this.value === Infinity ? "Division by zero is not allowed" : this.value;
    }
}

const result1 = new Calculator(10).add(5).subtract(7).getResult(); // 10 + 5 - 7 = 8
console.log(result1);
const result2 = new Calculator(2).multiply(5).power(2).getResult(); // (2 * 5) ^ 2 = 100
console.log(result2);
const result3 = new Calculator(20).divide(0).getResult(); // 20 / 0 
console.log(result3);

const result4 = new Calculator(238)
    .power(-84)
    .multiply(-51)
    .power(-159)
    .divide(-174)
    .add(462)
    .divide(-324)
    .add(318)
    .add(-56)
    .power(-250)
    .divide(-36)
    .multiply(-248)
    .subtract(107)
    .getResult();
console.log(result4);
// [238, -84, -51, -159, -174, 462, -324, 318, -56, -250, -36, -248, 107]