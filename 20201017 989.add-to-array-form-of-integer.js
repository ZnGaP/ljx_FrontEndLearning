/*
 * @lc app=leetcode id=989 lang=javascript
 *
 * [989] Add to Array-Form of Integer
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function(A, K) {
    let sum = [];
    while(K >= 1) {
        sum.unshift(K % 10);
        K = Math.floor(K / 10);
    }
    let lenSum = sum.length,
        lenA = A.length;
    if(lenSum < lenA) {
        let temp = sum;
        sum = A;
        A = temp;
        lenSum = sum.length,
        lenA = A.length;
    }
    for(let i = 1; i <= lenA; i++) {
        sum[lenSum - i] = sum[lenSum - i] + A[lenA - i];
    }
    for(let j = 1; j <= lenSum - 1; j++) {
        let s = sum[lenSum - j];
        if(s >= 10) {
            sum[lenSum - j] = s % 10;
            sum[lenSum - j - 1] += Math.floor(s / 10);
        }
    }
    if(sum[0] >= 10) {
        let s = sum[0];
        sum[0] = s % 10;
        sum.unshift(Math.floor(s / 10));
    }

    return sum;
};
// @lc code=end

