/*
 * [344] Reverse String
 *
 * https://leetcode.com/problems/reverse-string/description/
 *
 * algorithms
 * Easy (61.92%)
 * Total Accepted:    326.9K
 * Total Submissions: 528K
 * Testcase Example:  '"hello"'
 *
 * Write a function that takes a string as input and returns the string
 * reversed.
 * 
 * Example 1:
 * 
 * 
 * 
 * Input: "hello"
 * Output: "olleh"
 * 
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: "A man, a plan, a canal: Panama"
 * Output: "amanaP :lanac a ,nalp a ,nam A"
 * 
 * 
 * 
 * 
 */
/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
    let reStr = [];
    let length = s.length;
    for(let i = 0;i < length;i++){
        reStr[i] = s[length - i - 1];
    }
    return reStr.join('');
};
