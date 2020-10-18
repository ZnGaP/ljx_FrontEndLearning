/*
 * @lc app=leetcode id=985 lang=javascript
 *
 * [985] Sum of Even Numbers After Queries
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumEvenAfterQueries = function(A, queries) {
    let result = [];
    for(let i = 0; i < queries.length; i++) {
        let addingNum = queries[i][0],
            addingIndex = queries[i][1];
        A[addingIndex]  = A[addingIndex] + addingNum;
        result.push(evenSum(A));
    }
    return result;

    function evenSum(ary) {
        let sum = 0;
        for(let i = 0; i < ary.length; i++) {
            if(ary[i] % 2 === 0) {
                sum += ary[i];
            }
        }
        return sum;
    }
};
// @lc code=end

