/*
 * @lc app=leetcode id=680 lang=javascript
 *
 * [680] Valid Palindrome II
 *
 * https://leetcode.com/problems/valid-palindrome-ii/description/
 *
 * algorithms
 * Easy (33.78%)
 * Total Accepted:    63.7K
 * Total Submissions: 188.4K
 * Testcase Example:  '"aba"'
 *
 * 
 * Given a non-empty string s, you may delete at most one character.  Judge
 * whether you can make it a palindrome.
 * 
 * 
 * Example 1:
 * 
 * Input: "aba"
 * Output: True
 * 
 * 
 * 
 * Example 2:
 * 
 * Input: "abca"
 * Output: True
 * Explanation: You could delete the character 'c'.
 * 
 * 
 * 
 * Note:
 * 
 * The string will only contain lowercase characters a-z.
 * The maximum length of the string is 50000.
 * 
 * 
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let len = s.length;
    let count = count1 = 0;
    for(let i = 0, j = len - 1;i <= j;i++, j--) {
        if(s[i] !== s[j]) {
            i--;
            count++;
        }
    }
    for(let i = 0, j = len - 1;i <= j;i++, j--) {
        if(s[i] !== s[j]) {
            j++;
            count1++;
        }
    }
    if(len <= 3) return len <= 2 || count < 1;
    return count < 2 || count1 < 2;
};

