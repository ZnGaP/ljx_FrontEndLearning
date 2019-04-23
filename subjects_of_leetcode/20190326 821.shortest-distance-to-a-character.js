/*
 * @lc app=leetcode id=821 lang=javascript
 *
 * [821] Shortest Distance to a Character
 *
 * https://leetcode.com/problems/shortest-distance-to-a-character/description/
 *
 * algorithms
 * Easy (62.75%)
 * Total Accepted:    32.3K
 * Total Submissions: 51.3K
 * Testcase Example:  '"loveleetcode"\n"e"'
 *
 * Given a string S and a character C, return an array of integers representing
 * the shortest distance from the character C in the string.
 * 
 * Example 1:
 * 
 * 
 * Input: S = "loveleetcode", C = 'e'
 * Output: [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]
 * 
 * 
 * 
 * 
 * Note:
 * 
 * 
 * S string length is in [1, 10000].
 * C is a single character, and guaranteed to be in string S.
 * All letters in S and C are lowercase.
 * 
 * 
 */
/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
var shortestToChar = function(S, C) {
    let distance = [];
    let chars = S.split('');
    for(let i = 0;i < chars.length;i++) {
        let index1 = chars.lastIndexOf(C, i);
        let index2 = chars.indexOf(C, i);
        if(index1 === -1) {
            distance[i] = index2 - i;
        } else if(index2 === -1) {
            distance[i] = i - index1;
        } else {
            distance[i] = Math.min(i - index1, index2 - i);
        }
    }
    return distance;
};

