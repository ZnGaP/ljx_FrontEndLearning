/*
 * @lc app=leetcode id=709 lang=javascript
 *
 * [709] To Lower Case
 *
 * https://leetcode.com/problems/to-lower-case/description/
 *
 * algorithms
 * Easy (76.26%)
 * Total Accepted:    79.5K
 * Total Submissions: 104.2K
 * Testcase Example:  '"Hello"'
 *
 * Implement function ToLowerCase() that has a string parameter str, and
 * returns the same string in lowercase.
 * 
 * 
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: "Hello"
 * Output: "hello"
 * 
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: "here"
 * Output: "here"
 * 
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: "LOVELY"
 * Output: "lovely"
 * 
 * 
 * 
 * 
 * 
 */
/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
    let lower = '';
    for(let i = 0;i < str.length;i++) {
        let code = str[i].charCodeAt();
        if(code < 97 && code > 64) {
            code += 32;
        }
        lower += String.fromCharCode(code);
    }
    return lower;
};

