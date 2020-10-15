/*
 * @lc app=leetcode id=908 lang=javascript
 *
 * [908] Smallest Range I
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var smallestRangeI = function(A, K) {
    let min = Math.min.apply(null, A);
    let max = Math.max.apply(null, A);
    let minRight = min + K,
        maxLeft = max - K;
    if(minRight > maxLeft) {
        return 0;
    }
    return maxLeft - minRight;
};
// @lc code=end

