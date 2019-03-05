/*
 * @lc app=leetcode id=633 lang=javascript
 *
 * [633] Sum of Square Numbers
 *
 * https://leetcode.com/problems/sum-of-square-numbers/description/
 *
 * algorithms
 * Easy (32.80%)
 * Total Accepted:    39.2K
 * Total Submissions: 119.6K
 * Testcase Example:  '5'
 *
 * Given a non-negative integer c, your task is to decide whether there're two
 * integers a and b such that a^2 + b^2 = c.
 * 
 * Example 1:
 * 
 * 
 * Input: 5
 * Output: True
 * Explanation: 1 * 1 + 2 * 2 = 5
 * 
 * 
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: 3
 * Output: False
 * 
 * 
 * 
 * 
 */
/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
    let sum = b = Math.floor(Math.sqrt(c));
    let bHalf = Math.floor(b / 2);
    while(b >= bHalf) {
        for(let a = sum - b;a <= b;a++) {
            if(a * a + b * b === c) return true;
        }
        b--;
    }
    return false;
};

