/*
 * [290] Word Pattern
 *
 * https://leetcode.com/problems/word-pattern/description/
 *
 * algorithms
 * Easy (34.02%)
 * Total Accepted:    119.1K
 * Total Submissions: 350K
 * Testcase Example:  '"abba"\n"dog cat cat dog"'
 *
 * Given a pattern and a string str, find if str follows the same pattern.
 * 
 * Here follow means a full match, such that there is a bijection between a
 * letter in pattern and a non-empty word in str.
 * 
 * Example 1:
 * 
 * 
 * Input: pattern = "abba", str = "dog cat cat dog"
 * Output: true
 * 
 * Example 2:
 * 
 * 
 * Input:pattern = "abba", str = "dog cat cat fish"
 * Output: false
 * 
 * Example 3:
 * 
 * 
 * Input: pattern = "aaaa", str = "dog cat cat dog"
 * Output: false
 * 
 * Example 4:
 * 
 * 
 * Input: pattern = "abba", str = "dog dog dog dog"
 * Output: false
 * 
 * Notes:
 * You may assume pattern contains only lowercase letters, and str contains
 * lowercase letters separated by a single space.
 */
/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    let str_ary = str.split(" ");
    if(str_ary.length !== pattern.length){
        return false;
    }
    let map = new Map();
    for(let i = 0;i < str_ary.length;i++){
        if(map.get(pattern[i]) || map.get("str_"+str_ary[i])){
            if(map.get(pattern[i]) !== str_ary[i]){
            return false;
        }
        if(map.get("str_"+str_ary[i]) !== pattern[i]){
            return false;
        }}
        map.set(pattern[i], str_ary[i]);
        map.set("str_"+str_ary[i], pattern[i]);
    }
    return true;
};
