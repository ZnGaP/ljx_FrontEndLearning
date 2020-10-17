/*
 * @lc app=leetcode id=961 lang=javascript
 *
 * [961] N-Repeated Element in Size 2N Array
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function(A) {
    let map = new Map();
    for(let i = 0; i < A.length; i++) {
        let key = A[i];
        if(!map.get(key)) {
            map.set(key, 1);
            continue;
        }
        map.set(key, map.get(key)+1);
    }
    let repeatedNum = A[0];
    for(let key of map.keys()) {
        if(map.get(key) > map.get(repeatedNum)) repeatedNum = key;
    }
    return repeatedNum;
};
// @lc code=end

