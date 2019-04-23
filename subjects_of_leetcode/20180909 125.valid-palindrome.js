/*
 * [125] Valid Palindrome
 *
 * https://leetcode.com/problems/valid-palindrome/description/
 *
 * algorithms
 * Easy (28.36%)
 * Total Accepted:    260.7K
 * Total Submissions: 919.1K
 * Testcase Example:  '"A man, a plan, a canal: Panama"'
 *
 * Given a string, determine if it is a palindrome, considering only
 * alphanumeric characters and ignoring cases.
 * 
 * Note: For the purpose of this problem, we define empty string as valid
 * palindrome.
 * 
 * Example 1:
 * 
 * 
 * Input: "A man, a plan, a canal: Panama"
 * Output: true
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: "race a car"
 * Output: false
 * 
 * 
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
        let str = [];
        let j = 0
        s = s.toLocaleLowerCase();
        for(let i = 0;i < s.length;i++){
            if((s.charAt(i) >= 'a'&& s.charAt(i) <= 'z') || (s.charAt(i) >= '0' && s.charAt(i) <= '9')){
                str[j] = s.charAt(i);
                j++;
            }
        }
        for(let k = 0;k <= j/2;k++){
            if(str[k] != str[j-k-1]){
                return false;
            }
        }
    return true;
};
