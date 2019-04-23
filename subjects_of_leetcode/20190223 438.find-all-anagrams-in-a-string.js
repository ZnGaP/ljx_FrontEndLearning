/*
 * @lc app=leetcode id=438 lang=javascript
 *
 * [438] Find All Anagrams in a String
 *
 * https://leetcode.com/problems/find-all-anagrams-in-a-string/description/
 *
 * algorithms
 * Easy (36.23%)
 * Total Accepted:    105.9K
 * Total Submissions: 292.2K
 * Testcase Example:  '"cbaebabacd"\n"abc"'
 *
 * Given a string s and a non-empty string p, find all the start indices of p's
 * anagrams in s.
 * 
 * Strings consists of lowercase English letters only and the length of both
 * strings s and p will not be larger than 20,100.
 * 
 * The order of output does not matter.
 * 
 * Example 1:
 * 
 * Input:
 * s: "cbaebabacd" p: "abc"
 * 
 * Output:
 * [0, 6]
 * 
 * Explanation:
 * The substring with start index = 0 is "cba", which is an anagram of "abc".
 * The substring with start index = 6 is "bac", which is an anagram of
 * "abc".
 * 
 * 
 * 
 * Example 2:
 * 
 * Input:
 * s: "abab" p: "ab"
 * 
 * Output:
 * [0, 1, 2]
 * 
 * Explanation:
 * The substring with start index = 0 is "ab", which is an anagram of "ab".
 * The substring with start index = 1 is "ba", which is an anagram of "ab".
 * The substring with start index = 2 is "ab", which is an anagram of "ab".
 * 
 * 
 */
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    let number = [];
    let map = new Array(26);
    map.fill(0);
    for(let i = 0;i < p.length;i++) {
        map[p[i].charCodeAt() - 97]++;
    }
    let j = 0;
    for(let i = 0;i < s.length;i++) {
        let index = s[i].charCodeAt() - 97;
        map[index]--;
        while(map[index] < 0) {
            let index1 = s[j++].charCodeAt() - 97;
            map[index1]++;
        }
        if(i - j + 1 === p.length) {
            number.push(j);
        }
    }
    return number;
};
// String[index].charCodeAt()比String.charCodeAt(index)快
