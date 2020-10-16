/*
 * @lc app=leetcode id=941 lang=javascript
 *
 * [941] Valid Mountain Array
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function(A) {
    let length = A.length;
    if(length < 3) return false;

    let i = 0;
    while(1) {
        if(A[i] < A[i+1]) {
            i++;
            continue;
        }
        break;
    }
    if(i == 0 || i == length-1) return false;
    while(i < length) {
        if(A[i] <= A[i+1]) return false;
        i++;
    }
    return true;
};
// @lc code=end

