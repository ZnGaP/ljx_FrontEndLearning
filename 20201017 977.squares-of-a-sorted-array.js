/*
 * @lc app=leetcode id=977 lang=javascript
 *
 * [977] Squares of a Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
    for(let i = 0; i < A.length; i++) {
        A[i] = A[i] * A[i];
    }
    return A.sort((a, b) => (a - b));
};
// @lc code=end

