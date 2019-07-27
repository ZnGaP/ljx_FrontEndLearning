/*
 * [205] Isomorphic Strings
 *
 * https://leetcode.com/problems/isomorphic-strings/description/
 *
 * algorithms
 * Easy (35.47%)
 * Total Accepted:    157.5K
 * Total Submissions: 444K
 * Testcase Example:  '"egg"\n"add"'
 *
 * Given two strings s and t, determine if they are isomorphic.
 * 
 * Two strings are isomorphic if the characters in s can be replaced to get t.
 * 
 * All occurrences of a character must be replaced with another character while
 * preserving the order of characters. No two characters may map to the same
 * character but a character may map to itself.
 * 
 * Example 1:
 * 
 * 
 * Input: s = "egg", t = "add"
 * Output: true
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: s = "foo", t = "bar"
 * Output: false
 * 
 * Example 3:
 * 
 * 
 * Input: s = "paper", t = "title"
 * Output: true
 * 
 * Note:
 * You may assume both s and t have the same length.
 * 
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let s_ary = new Array(128);
    let t_ary = new Array(128);
    for(let i = 0;i < s.length;i++){
        if(s_ary[s[i]] != t_ary[t[i]]){
            return false;
        }
        if(s_ary[s[i]] == undefined){
            s_ary[s[i]] = i + 1;
            t_ary[t[i]] = i + 1; 
        }
        console.log(s_ary[s[i]]+' '+t_ary[t[i]]);
    }
    return true;
};
