/*
 * @lc app=leetcode id=409 lang=javascript
 *
 * [409] Longest Palindrome
 *
 * https://leetcode.com/problems/longest-palindrome/description/
 *
 * algorithms
 * Easy (47.17%)
 * Total Accepted:    87.7K
 * Total Submissions: 185.1K
 * Testcase Example:  '"abccccdd"'
 *
 * Given a string which consists of lowercase or uppercase letters, find the
 * length of the longest palindromes that can be built with those letters.
 * 
 * This is case sensitive, for example "Aa" is not considered a palindrome
 * here.
 * 
 * Note:
 * Assume the length of given string will not exceed 1,010.
 * 
 * 
 * Example: 
 * 
 * Input:
 * "abccccdd"
 * 
 * Output:
 * 7
 * 
 * Explanation:
 * One longest palindrome that can be built is "dccaccd", whose length is 7.
 * 
 * 
 */
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let sum = 0;
    let sAry = s.split('');
    let palAry = [];
    palAry[0] = [];
    let i = 0;
    while(i < sAry.length) {
        let index = sAry.indexOf(sAry[i], i + 1);
        if(index > 0) {
            palAry[i].push(sAry[index]);
            sAry.splice(index, 1);
        } else {
            palAry[i].push(sAry[i]);
            palAry[i+1] = [];
            i++;
        }
    }
    let flag = false;
    for(let i = 0;i < palAry.length;i++) {
        let length = palAry[i].length;
        if(length % 2 === 0) {
            sum += length;
        } else {
            sum += length - 1;
            flag = true;
        }
    }
    if(flag) {
        sum += 1;
    }
    return sum;
};
