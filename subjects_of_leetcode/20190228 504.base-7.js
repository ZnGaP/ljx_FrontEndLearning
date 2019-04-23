/*
 * @lc app=leetcode id=504 lang=javascript
 *
 * [504] Base 7
 *
 * https://leetcode.com/problems/base-7/description/
 *
 * algorithms
 * Easy (44.55%)
 * Total Accepted:    38.2K
 * Total Submissions: 85.7K
 * Testcase Example:  '100'
 *
 * Given an integer, return its base 7 string representation.
 * 
 * Example 1:
 * 
 * Input: 100
 * Output: "202"
 * 
 * 
 * 
 * Example 2:
 * 
 * Input: -7
 * Output: "-10"
 * 
 * 
 * 
 * Note:
 * The input will be in range of [-1e7, 1e7].
 * 
 */
/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function(num) {
    if(num === 0) return '0';
    let str = [];
    let flag = false;
    if(num < 0) {
        flag = true;
        num = -num;
    };
    while(num > 0) {
        str.unshift(num % 7);
        num = Math.floor(num / 7);
    }
    if(flag) {
        str.unshift('-');
        return str.join('');
    }
    return str.join('');
};

