/*
 * @lc app=leetcode id=784 lang=javascript
 *
 * [784] Letter Case Permutation
 *
 * https://leetcode.com/problems/letter-case-permutation/description/
 *
 * algorithms
 * Easy (55.49%)
 * Total Accepted:    39.8K
 * Total Submissions: 71.6K
 * Testcase Example:  '"a1b2"'
 *
 * Given a string S, we can transform every letter individually to be lowercase
 * or uppercase to create another string.  Return a list of all possible
 * strings we could create.
 * 
 * 
 * Examples:
 * Input: S = "a1b2"
 * Output: ["a1b2", "a1B2", "A1b2", "A1B2"]
 * 
 * Input: S = "3z4"
 * Output: ["3z4", "3Z4"]
 * 
 * Input: S = "12345"
 * Output: ["12345"]
 * 
 * 
 * Note:
 * 
 * 
 * S will be a string with length between 1 and 12.
 * S will consist only of letters or digits.
 * 
 * 
 */
/**
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function(S) {
    let permutation = [];
    let len = S.length;
    transform('', 0);
    return permutation;
    function transform(s1, index) {
        if(index === len) {
            permutation.push(s1)
            return;
        }
        if(isNaN(parseInt(S[index]))) {
            transform(s1 + S[index].toLocaleLowerCase(), index + 1);
            transform(s1 + S[index].toLocaleUpperCase(), index + 1);
        } else {
            s1 += S[index];
            transform(s1, index + 1);
        }
    }
};

