/*
 * @lc app=leetcode id=476 lang=javascript
 *
 * [476] Number Complement
 *
 * https://leetcode.com/problems/number-complement/description/
 *
 * algorithms
 * Easy (62.04%)
 * Total Accepted:    100.2K
 * Total Submissions: 161.6K
 * Testcase Example:  '5'
 *
 * Given a positive integer, output its complement number. The complement
 * strategy is to flip the bits of its binary representation.
 * 
 * Note:
 * 
 * The given integer is guaranteed to fit within the range of a 32-bit signed
 * integer.
 * You could assume no leading zero bit in the integer’s binary
 * representation.
 * 
 * 
 * 
 * Example 1:
 * 
 * Input: 5
 * Output: 2
 * Explanation: The binary representation of 5 is 101 (no leading zero bits),
 * and its complement is 010. So you need to output 2.
 * 
 * 
 * 
 * Example 2:
 * 
 * Input: 1
 * Output: 0
 * Explanation: The binary representation of 1 is 1 (no leading zero bits), and
 * its complement is 0. So you need to output 0.
 * 
 * 
 */
/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    let binaryAry = num.toString(2).split('');
    for(let i = 0;i < binaryAry.length;i++) {
        if(binaryAry[i] === '1') {
            binaryAry[i] = 0;
        } else {
            binaryAry[i] = 1;
        }
    }
    return parseInt(binaryAry.join(''), 2);
};
