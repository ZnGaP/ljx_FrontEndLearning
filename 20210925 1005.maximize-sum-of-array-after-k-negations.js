/*
 * @lc app=leetcode id=1005 lang=javascript
 *
 * [1005] Maximize Sum Of Array After K Negations
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function(nums, k) {
    let time = k;
    let numbers = nums;
    while(time--) {
        minIndex = getMinIndex(numbers);
        numbers[minIndex] = -numbers[minIndex];
    }
    console.log(numbers)
    return numbers.reduce((pre, cur) => pre + cur);

    function getMinIndex(array) {
        let min = array[0];
        let minIndex = 0;
        for(let i=0; i < array.length; i++) {
            let cur = array[i];
            if(cur < min) {
                min = cur;
                minIndex = i;
            }
        }
        console.log(minIndex);
        return minIndex;
    }
};
// @lc code=end

