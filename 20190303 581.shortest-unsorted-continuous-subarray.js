/*
 * @lc app=leetcode id=581 lang=javascript
 *
 * [581] Shortest Unsorted Continuous Subarray
 *
 * https://leetcode.com/problems/shortest-unsorted-continuous-subarray/description/
 *
 * algorithms
 * Easy (29.59%)
 * Total Accepted:    58.1K
 * Total Submissions: 196.4K
 * Testcase Example:  '[2,6,4,8,10,9,15]'
 *
 * Given an integer array, you need to find one continuous subarray that if you
 * only sort this subarray in ascending order, then the whole array will be
 * sorted in ascending order, too.  
 * 
 * You need to find the shortest such subarray and output its length.
 * 
 * Example 1:
 * 
 * Input: [2, 6, 4, 8, 10, 9, 15]
 * Output: 5
 * Explanation: You need to sort [6, 4, 8, 10, 9] in ascending order to make
 * the whole array sorted in ascending order.
 * 
 * 
 * 
 * Note:
 * 
 * Then length of the input array is in range [1, 10,000].
 * The input array may contain duplicates, so ascending order here means . 
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    let sortNums = [];
    Array.prototype.push.apply(sortNums, nums);
    sortNums.sort((a, b) => a - b);
    let left = 0,
        right = nums.length - 1;
    for(;left < right;left++) {
        if(nums[left] - sortNums[left] !== 0) break;
    }
    for(;right > left;right--) {
        if(nums[right] - sortNums[right] !== 0) break;
    }
    return right - left ? right - left + 1 : 0;
};

