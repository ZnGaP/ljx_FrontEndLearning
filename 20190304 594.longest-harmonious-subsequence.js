/*
 * @lc app=leetcode id=594 lang=javascript
 *
 * [594] Longest Harmonious Subsequence
 *
 * https://leetcode.com/problems/longest-harmonious-subsequence/description/
 *
 * algorithms
 * Easy (43.01%)
 * Total Accepted:    32.7K
 * Total Submissions: 76K
 * Testcase Example:  '[1,3,2,2,5,2,3,7]'
 *
 * We define a harmonious array is an array where the difference between its
 * maximum value and its minimum value is exactly 1.
 * 
 * Now, given an integer array, you need to find the length of its longest
 * harmonious subsequence among all its possible subsequences.
 * 
 * Example 1:
 * 
 * Input: [1,3,2,2,5,2,3,7]
 * Output: 5
 * Explanation: The longest harmonious subsequence is [3,2,2,2,3].
 * 
 * 
 * 
 * Note:
 * The length of the input array will not exceed 20,000.
 * 
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
    nums.sort((a, b) => a - b);
    let subLen = 0;
    for(let i = 0;i < nums.length - 1;i++) {
        let index = nums.lastIndexOf(nums[i] + 1);
        subLen = Math.max(subLen, index - i + 1);
    }
    return subLen;
};

