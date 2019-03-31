/*
 * @lc app=leetcode id=859 lang=javascript
 *
 * [859] Buddy Strings
 *
 * https://leetcode.com/problems/buddy-strings/description/
 *
 * algorithms
 * Easy (27.48%)
 * Total Accepted:    21.4K
 * Total Submissions: 77.8K
 * Testcase Example:  '"ab"\n"ba"'
 *
 * Given two strings A and B of lowercase letters, return true if and only if
 * we can swap two letters in A so that the result equals B.
 * 
 * 
 * 
 * Example 1:
 * 
 * 
 * 
 * Input: A = "ab", B = "ba"
 * Output: true
 * 
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: A = "ab", B = "ab"
 * Output: false
 * 
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: A = "aa", B = "aa"
 * Output: true
 * 
 * 
 * 
 * Example 4:
 * 
 * 
 * Input: A = "aaaaaaabc", B = "aaaaaaacb"
 * Output: true
 * 
 * 
 * 
 * Example 5:
 * 
 * 
 * Input: A = "", B = "aa"
 * Output: false
 * 
 * 
 * 
 * 
 * Note:
 * 
 * 
 * 0 <= A.length <= 20000
 * 0 <= B.length <= 20000
 * A and B consist only of lowercase letters.
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */
/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var buddyStrings = function(A, B) {
    if(A.length !== B.length) return false;
    if(A === B) {
        let map = new Map;
        for(let i = 0;i < A.length;i++) {
            map.set(A[i], map.get(A[i]) ? map.get(A[i]) + 1 : 1)
        }
        for(let value of map.values()) {
            if(value > 1) return true;
        }
        return false;
    }
    let a1 = '';
    let b1 = '';
    for(let i = 0;i < A.length;i++) {
        if(A[i] !== B[i]) {
            a1 += A[i];
            b1 += B[i];
        }
    }
    return a1.length === 2 && (a1 + a1).includes(b1);
};

