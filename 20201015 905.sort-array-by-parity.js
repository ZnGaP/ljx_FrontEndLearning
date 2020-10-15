/*
 * @lc app=leetcode id=905 lang=javascript
 *
 * [905] Sort Array By Parity
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
    let sortedAry = [];
    for(let i = 0; i < A.length; i++){
        val = A[i];
        if(val % 2 == 0) {
            sortedAry.unshift(val);
        } else {
            sortedAry.push(val);
        }
    }
    return sortedAry;
};
// @lc code=end

