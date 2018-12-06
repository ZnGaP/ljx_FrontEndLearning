/*
 * [367] Valid Perfect Square
 *
 * https://leetcode.com/problems/valid-perfect-square/description/
 *
 * algorithms
 * Easy (38.94%)
 * Total Accepted:    91.4K
 * Total Submissions: 234.5K
 * Testcase Example:  '16'
 *
 * Given a positive integer num, write a function which returns True if num is
 * a perfect square else False.
 * 
 * Note: Do not use any built-in library function such as sqrt.
 * 
 * Example 1:
 * 
 * 
 * 
 * Input: 16
 * Output: true
 * 
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: 14
 * Output: false
 * 
 * 
 * 
 */
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    let right =  num;
    let left = 1;
    while(right > left + 1) {
        let sqrtNumber = Math.floor((right + left) / 2);
        if(sqrtNumber * sqrtNumber > num) {
            right = sqrtNumber;
        }else if(sqrtNumber * sqrtNumber < num) {
            left = sqrtNumber;
        }else {
            return true;
        }
    }
    return false || (num === 1);
};
