/*
 * @lc app=leetcode id=665 lang=javascript
 *
 * [665] Non-decreasing Array
 *
 * https://leetcode.com/problems/non-decreasing-array/description/
 *
 * algorithms
 * Easy (19.52%)
 * Total Accepted:    44.8K
 * Total Submissions: 229.3K
 * Testcase Example:  '[4,2,3]'
 *
 * 
 * Given an array with n integers, your task is to check if it could become
 * non-decreasing by modifying at most 1 element.
 * 
 * 
 * 
 * We define an array is non-decreasing if array[i]  holds for every i (1 
 * 
 * Example 1:
 * 
 * Input: [4,2,3]
 * Output: True
 * Explanation: You could modify the first 4 to 1 to get a non-decreasing
 * array.
 * 
 * 
 * 
 * Example 2:
 * 
 * Input: [4,2,1]
 * Output: False
 * Explanation: You can't get a non-decreasing array by modify at most one
 * element.
 * 
 * 
 * 
 * Note:
 * The n belongs to [1, 10,000].
 * 
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
    let i = 0;
    let j = nums.length - 1;
    while(i < j && nums[i] <= nums[i+1]) {
        i++;
    }
    while(j > i && nums[j] >= nums[j-1]) {
        j--;
    }
    const head = (i === 0) ? -Infinity : nums[i-1];
    const next = (j === nums.length - 1) ? Infinity : nums[j+1];
    if(j - i <= 1 && (head <= nums[j] || nums[i] <= next)) {
        return true;
    } else {
        return false;
    }
};

