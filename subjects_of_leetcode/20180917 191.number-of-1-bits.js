/*
 * [191] Number of 1 Bits
 *
 * https://leetcode.com/problems/number-of-1-bits/description/
 *
 * algorithms
 * Easy (40.85%)
 * Total Accepted:    215.4K
 * Total Submissions: 527.3K
 * Testcase Example:  '           0 (00000000000000000000000000000000)'
 *
 * Write a function that takes an unsigned integer and returns the number of
 * '1' bits it has (also known as the Hamming weight).
 * 
 * Example 1:
 * 
 * 
 * Input: 11
 * Output: 3
 * Explanation: Integer 11 has binary representation
 * 00000000000000000000000000001011 
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: 128
 * Output: 1
 * Explanation: Integer 128 has binary representation
 * 00000000000000000000000010000000
 * 
 * 
 */
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let l = Math.floor(Math.log2(n));
    let count = 0;
    for(let i = 0;i <= l;i++){
        if(n & 1 == 1){
            count++;
        }
        n >>= 1;
    }
    return count;
};
