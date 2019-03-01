/*
 * @lc app=leetcode id=507 lang=javascript
 *
 * [507] Perfect Number
 *
 * https://leetcode.com/problems/perfect-number/description/
 *
 * algorithms
 * Easy (33.50%)
 * Total Accepted:    35.4K
 * Total Submissions: 105.5K
 * Testcase Example:  '28'
 *
 * We define the Perfect Number is a positive integer that is equal to the sum
 * of all its positive divisors except itself. 
 * 
 * Now, given an integer n, write a function that returns true when it is a
 * perfect number and false when it is not.
 * 
 * 
 * Example:
 * 
 * Input: 28
 * Output: True
 * Explanation: 28 = 1 + 2 + 4 + 7 + 14
 * 
 * 
 * 
 * Note:
 * The input number n will not exceed 100,000,000. (1e8)
 * 
 */
/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    let sum = 1;
    let num1 = Math.sqrt(num);
    if(num1 % 1 === 0) {
        sum += num1;
    }
    for(let i = 2;i < num1;i++) {
        let num2 = num / i;
        if(num2 % 1 === 0) {
            sum += i + num2;
        }
    }
    if(sum === num) {
        return true;
    }
    return false;
};

