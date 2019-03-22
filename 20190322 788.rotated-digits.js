/*
 * @lc app=leetcode id=788 lang=javascript
 *
 * [788] Rotated Digits
 *
 * https://leetcode.com/problems/rotated-digits/description/
 *
 * algorithms
 * Easy (53.29%)
 * Total Accepted:    23.7K
 * Total Submissions: 44.3K
 * Testcase Example:  '10'
 *
 * X is a good number if after rotating each digit individually by 180 degrees,
 * we get a valid number that is different from X.  Each digit must be rotated
 * - we cannot choose to leave it alone.
 * 
 * A number is valid if each digit remains a digit after rotation. 0, 1, and 8
 * rotate to themselves; 2 and 5 rotate to each other; 6 and 9 rotate to each
 * other, and the rest of the numbers do not rotate to any other number and
 * become invalid.
 * 
 * Now given a positive number N, how many numbers X from 1 to N are good?
 * 
 * 
 * Example:
 * Input: 10
 * Output: 4
 * Explanation: 
 * There are four good numbers in the range [1, 10] : 2, 5, 6, 9.
 * Note that 1 and 10 are not good numbers, since they remain unchanged after
 * rotating.
 * 
 * 
 * Note:
 * 
 * 
 * N  will be in range [1, 10000].
 * 
 * 
 */
/**
 * @param {number} N
 * @return {number}
 */
var rotatedDigits = function(N) {
    let count = 0;
    for(let k = 2;k <= N;k++) {
        isValid(k);
    }
    return count;
    function isValid(k) {
        let str = k.toString();
        let flag = false;
        for(let i = 0;i < str.length;i++) {
            switch(str[i]) {
                case '2' :
                case '5' :
                case '6' :
                case '9' :
                    flag = true;
                    break;
                case '3' :
                case '4' :
                case '7' :
                    return;
            }
        }
        if(flag) count++;
        return;
    }
};

