/*
 * @lc app=leetcode id=415 lang=javascript
 *
 * [415] Add Strings
 *
 * https://leetcode.com/problems/add-strings/description/
 *
 * algorithms
 * Easy (42.97%)
 * Total Accepted:    83.6K
 * Total Submissions: 194.5K
 * Testcase Example:  '"0"\n"0"'
 *
 * Given two non-negative integers num1 and num2 represented as string, return
 * the sum of num1 and num2.
 * 
 * Note:
 * 
 * The length of both num1 and num2 is < 5100.
 * Both num1 and num2 contains only digits 0-9.
 * Both num1 and num2 does not contain any leading zero.
 * You must not use any built-in BigInteger library or convert the inputs to
 * integer directly.
 * 
 * 
 */
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let i = num1.length - 1;
    let j = num2.length - 1;
    let sum = '';
    let num = 0;
    for(;i >=0 || j >= 0 || num > 0;i--, j--) {
        let digitnum1 = i < 0 ? 0 : num1.charAt(i) - '0';
        let digitnum2 = j < 0 ? 0 : num2.charAt(j) - '0';
        let digitsum = digitnum1 + digitnum2 + num;
        num = Math.floor(digitsum / 10);
        digitsum %= 10;
        sum = digitsum.toString() + sum;
    }
    return sum;
};
