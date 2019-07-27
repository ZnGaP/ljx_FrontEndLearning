/*
 * @lc app=leetcode id=400 lang=javascript
 *
 * [400] Nth Digit
 *
 * https://leetcode.com/problems/nth-digit/description/
 *
 * algorithms
 * Easy (29.84%)
 * Total Accepted:    41.8K
 * Total Submissions: 140.1K
 * Testcase Example:  '3'
 *
 * Find the nth digit of the infinite integer sequence 1, 2, 3, 4, 5, 6, 7, 8,
 * 9, 10, 11, ... 
 * 
 * Note:
 * n is positive and will fit within the range of a 32-bit signed integer (n <
 * 231).
 * 
 * 
 * Example 1:
 * 
 * Input:
 * 3
 * 
 * Output:
 * 3
 * 
 * 
 * 
 * Example 2:
 * 
 * Input:
 * 11
 * 
 * Output:
 * 0
 * 
 * Explanation:
 * The 11th digit of the sequence 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ... is a
 * 0, which is part of the number 10.
 * 
 * 
 */
/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function(n) {
    if(n < 10) {
        return n;
    }
    let i = 1;
    let sum = 9;
    while(sum < n) {
        i++
        sum += 9 * i * Math.pow(10, i - 1);
    }
    n -= (sum - 9 * i * Math.pow(10, i - 1));
    let th = (n % i === 0) ? i : n % i;
    let number = ((th === i) ? (n / i - 1) : Math.floor(n / i));
    return (Math.pow(10, i - 1) + number).toString()[th - 1];
};
