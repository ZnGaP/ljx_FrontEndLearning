/*
 * @lc app=leetcode id=696 lang=javascript
 *
 * [696] Count Binary Substrings
 *
 * https://leetcode.com/problems/count-binary-substrings/description/
 *
 * algorithms
 * Easy (52.74%)
 * Total Accepted:    28K
 * Total Submissions: 53.1K
 * Testcase Example:  '"00110"'
 *
 * Give a string s, count the number of non-empty (contiguous) substrings that
 * have the same number of 0's and 1's, and all the 0's and all the 1's in
 * these substrings are grouped consecutively. 
 * 
 * Substrings that occur multiple times are counted the number of times they
 * occur.
 * 
 * Example 1:
 * 
 * Input: "00110011"
 * Output: 6
 * Explanation: There are 6 substrings that have equal number of consecutive
 * 1's and 0's: "0011", "01", "1100", "10", "0011", and "01".
 * Notice that some of these substrings repeat and are counted the number of
 * times they occur.
 * Also, "00110011" is not a valid substring because all the 0's (and 1's) are
 * not grouped together.
 * 
 * 
 * 
 * Example 2:
 * 
 * Input: "10101"
 * Output: 4
 * Explanation: There are 4 substrings: "10", "01", "10", "01" that have equal
 * number of consecutive 1's and 0's.
 * 
 * 
 * 
 * Note:
 * s.length will be between 1 and 50,000.
 * s will only consist of "0" or "1" characters.
 * 
 */
/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
    if(s.length < 2) return 0;
    let count = 0;
    for(let i = 0;i < s.length - 1;i++) {
        let flag = true;
        let val = s[i];
        let j = 1;
        while(s[i + j] === val) {
            j++;
            if(i + j === s.length) {
                flag = false;
                break;
            };
        }
        for(let index = i + j;index < i + j + j - 1;index++) {
            if(s[index] !== s[index + 1]) {
                flag = false;
            }
        }
        if(flag) count++;
    }
    return count;
};

