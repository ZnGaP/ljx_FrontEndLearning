/*
 * @lc app=leetcode id=976 lang=javascript
 *
 * [976] Largest Perimeter Triangle
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number}
 */
var largestPerimeter = function(A) {
    A.sort((a, b) => (a - b));
    let larPer = 0;
    for(let i = 0; i < A.length - 2; i++) {
        let a = A[i],
            b = A[i + 1],
            c = A[i + 2];
        if(isTri(a, b, c)) {
            let per = a + b + c;
            if(larPer < per) {
                larPer = per;
            }
        }
    }
    return larPer;

    function isTri(a, b, c) {
        if(a + b > c) return true;
        return false;
    }
};
// @lc code=end

