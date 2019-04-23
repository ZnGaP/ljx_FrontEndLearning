/*
 * [190] Reverse Bits
 *
 * https://leetcode.com/problems/reverse-bits/description/
 *
 * algorithms
 * Easy (29.27%)
 * Total Accepted:    149K
 * Total Submissions: 509K
 * Testcase Example:  '    43261596 (00000010100101000001111010011100)'
 *
 * Reverse bits of a given 32 bits unsigned integer.
 * 
 * Example:
 * 
 * 
 * Input: 43261596
 * Output: 964176192
 * Explanation: 43261596 represented in binary as
 * 00000010100101000001111010011100, 
 * return 964176192 represented in binary as
 * 00111001011110000010100101000000.
 * 
 * 
 * Follow up:
 * If this function is called many times, how would you optimize it?
 */
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    if(n == 0){
        return 0;
    }else{
        let result = 0;
        for(let i = 0;i < 32;i++){
            result <<= 1;
            result |= (n & 1);
            n >>= 1;     
        }
        return result >>> 0;
    }
};
