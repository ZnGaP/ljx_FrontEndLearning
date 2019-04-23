/*
 * @lc app=leetcode id=387 lang=javascript
 *
 * [387] First Unique Character in a String
 *
 * https://leetcode.com/problems/first-unique-character-in-a-string/description/
 *
 * algorithms
 * Easy (48.02%)
 * Total Accepted:    194.9K
 * Total Submissions: 405.8K
 * Testcase Example:  '"leetcode"'
 *
 * 
 * Given a string, find the first non-repeating character in it and return it's
 * index. If it doesn't exist, return -1.
 * 
 * Examples:
 * 
 * s = "leetcode"
 * return 0.
 * 
 * s = "loveleetcode",
 * return 2.
 * 
 * 
 * 
 * 
 * Note: You may assume the string contain only lowercase letters.
 * 
 */
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let sAry = s.split('');
    for(let i = 0;i < s.length;i++) {
        let sChar = s[i];
        if(sAry.indexOf(sChar, i+1) > 0) {
            sAry.push(sChar);
        }else {
            return i;
        }
    }
    return -1;
};
