/*
 * @lc app=leetcode id=922 lang=javascript
 *
 * [922] Sort Array By Parity II
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
    let sortedAry = [];
    let i = 0,
        j = 1;
    for(let k = 0; k < A.length; k++) {
        let val = A[k];
        if(val % 2 == 0) {
            sortedAry[i] = val;
            i += 2;
        } else {
            sortedAry[j] = val;
            j += 2;
        }
    }
    return sortedAry;
};
// @lc code=end

