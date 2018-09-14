/*
 * [172] Factorial Trailing Zeroes
 *
 * https://leetcode.com/problems/factorial-trailing-zeroes/description/
 *
 * algorithms
 * Easy (37.01%)
 * Total Accepted:    129.8K
 * Total Submissions: 350.7K
 * Testcase Example:  '3'
 *
 * Given an integer n, return the number of trailing zeroes in n!.
 * 
 * Example 1:
 * 
 * 
 * Input: 3
 * Output: 0
 * Explanation: 3! = 6, no trailing zero.
 * 
 * Example 2:
 * 
 * 
 * Input: 5
 * Output: 1
 * Explanation: 5! = 120, one trailing zero.
 * 
 * Note: Your solution should be in logarithmic time complexity.
 * 
 */
/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    let count =  0;
    if(n < 5){
        return 0;
    }
    let i = 5;
    while(i <= n){
        let rest = i;
        while(rest % 5 == 0){
            rest /= 5;
            count++;
        }
        i += 5;
    }
    return count;
};
