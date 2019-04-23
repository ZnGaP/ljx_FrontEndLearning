/*
 * @lc app=leetcode id=557 lang=javascript
 *
 * [557] Reverse Words in a String III
 *
 * https://leetcode.com/problems/reverse-words-in-a-string-iii/description/
 *
 * algorithms
 * Easy (63.11%)
 * Total Accepted:    112.5K
 * Total Submissions: 178.2K
 * Testcase Example:  '"Let\'s take LeetCode contest"'
 *
 * Given a string, you need to reverse the order of characters in each word
 * within a sentence while still preserving whitespace and initial word order.
 * 
 * Example 1:
 * 
 * Input: "Let's take LeetCode contest"
 * Output: "s'teL ekat edoCteeL tsetnoc"
 * 
 * 
 * 
 * Note:
 * In the string, each word is separated by single space and there will not be
 * any extra space in the string.
 * 
 */
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let str = s.split(' ');
    for(let i = 0;i < str.length;i++) {
        str[i] = str[i].split('').reverse().join('');
    }
    return str.join(' ');
};

