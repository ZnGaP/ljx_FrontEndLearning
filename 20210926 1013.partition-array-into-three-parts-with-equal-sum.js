/*
 * @lc app=leetcode id=1013 lang=javascript
 *
 * [1013] Partition Array Into Three Parts With Equal Sum
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canThreePartsEqualSum = function(arr) {
    let totalSum = arr.reduce((pre, cur) => pre + cur);
    let right = arr.length - 1;
    while(right > 1) {
        let left = 0;
        let leftSum = arr[left];
        let rightSum = arr.slice(right, ).reduce((pre, cur) => pre + cur);
        while(left < right - 1) {
            let midSum = totalSum - leftSum - rightSum;
            if(leftSum == midSum && leftSum == rightSum) {
                    return true;
            }
            left++;
            leftSum += arr[left];
        }
        right--;
    }
    return false;
};
// @lc code=end

