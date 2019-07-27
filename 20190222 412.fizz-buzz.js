/*
 * @lc app=leetcode id=412 lang=javascript
 *
 * [412] Fizz Buzz
 *
 * https://leetcode.com/problems/fizz-buzz/description/
 *
 * algorithms
 * Easy (58.80%)
 * Total Accepted:    180.6K
 * Total Submissions: 307.1K
 * Testcase Example:  '1'
 *
 * Write a program that outputs the string representation of numbers from 1 to
 * n.
 * 
 * But for multiples of three it should output “Fizz” instead of the number and
 * for the multiples of five output “Buzz”. For numbers which are multiples of
 * both three and five output “FizzBuzz”.
 * 
 * Example:
 * 
 * n = 15,
 * 
 * Return:
 * [
 * ⁠   "1",
 * ⁠   "2",
 * ⁠   "Fizz",
 * ⁠   "4",
 * ⁠   "Buzz",
 * ⁠   "Fizz",
 * ⁠   "7",
 * ⁠   "8",
 * ⁠   "Fizz",
 * ⁠   "Buzz",
 * ⁠   "11",
 * ⁠   "Fizz",
 * ⁠   "13",
 * ⁠   "14",
 * ⁠   "FizzBuzz"
 * ]
 * 
 * 
 */
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    function representation(num) {
        if(num % 3 === 0 && num % 5 === 0) {
            return 'FizzBuzz';
        } else if(num % 3 === 0) {
            return 'Fizz';
        } else if(num % 5 === 0) {
            return 'Buzz';
        } else {
            return num.toString();
        }
    }
    let rep = [];
    for(let i = 1;i <= n;i++) {
        rep.push(representation(i));
    }
    return rep;
};
