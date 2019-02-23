/*
 * @lc app=leetcode id=434 lang=javascript
 *
 * [434] Number of Segments in a String
 *
 * https://leetcode.com/problems/number-of-segments-in-a-string/description/
 *
 * algorithms
 * Easy (36.63%)
 * Total Accepted:    51.1K
 * Total Submissions: 139.4K
 * Testcase Example:  '"Hello, my name is John"'
 *
 * Count the number of segments in a string, where a segment is defined to be a
 * contiguous sequence of non-space characters.
 * 
 * Please note that the string does not contain any non-printable characters.
 * 
 * Example:
 * 
 * Input: "Hello, my name is John"
 * Output: 5
 * 
 * 
 */
/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    let sAry = s.split(' ');
    while(1) {
        let index = sAry.indexOf('');
        if(index >= 0) {
            sAry.splice(index, 1);
        } else {
            return sAry.length;
        }
    }
};
