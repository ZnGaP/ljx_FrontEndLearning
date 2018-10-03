/*
 * [268] Missing Number
 *
 * https://leetcode.com/problems/missing-number/description/
 *
 * algorithms
 * Easy (46.13%)
 * Total Accepted:    207.2K
 * Total Submissions: 449K
 * Testcase Example:  '[3,0,1]'
 *
 * Given an array containing n distinct numbers taken from 0, 1, 2, ..., n,
 * find the one that is missing from the array.
 * 
 * Example 1:
 * 
 * 
 * Input: [3,0,1]
 * Output: 2
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: [9,6,4,2,3,5,7,0,1]
 * Output: 8
 * 
 * 
 * Note:
 * Your algorithm should run in linear runtime complexity. Could you implement
 * it using only constant extra space complexity?
 * 
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let length = nums.length;
    for(let i = 0;i <= length;i++){
        if(nums.indexOf(i) == -1) {
            return i;
        }
    }
};
var missingNumber = function(nums) {
    let length = nums.length;
    let sum = sum_nums = 0;
    for(let i = 0;i < length;i++){
        sum_nums += nums[i];
        sum += i;
    }
    return sum + length - sum_nums; 
};
