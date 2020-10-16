/*
 * @lc app=leetcode id=942 lang=javascript
 *
 * [942] DI String Match
 */

// @lc code=start
/**
 * @param {string} S
 * @return {number[]}
 */
var diStringMatch = function(S) {
    let number = [];
    let inc = 0;
    let dec = S.length;
    let i = 0;
    while(number.length !== S.length+1) {
        number[i] = S[i] === 'D' ? dec-- : inc++;
        i++
    }
    return number;
};
// @lc code=end

