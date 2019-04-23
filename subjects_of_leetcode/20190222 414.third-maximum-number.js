/*
 * @lc app=leetcode id=414 lang=javascript
 *
 * [414] Third Maximum Number
 *
 * https://leetcode.com/problems/third-maximum-number/description/
 *
 * algorithms
 * Easy (28.61%)
 * Total Accepted:    83.6K
 * Total Submissions: 292.3K
 * Testcase Example:  '[3,2,1]'
 *
 * Given a non-empty array of integers, return the third maximum number in this
 * array. If it does not exist, return the maximum number. The time complexity
 * must be in O(n).
 * 
 * Example 1:
 * 
 * Input: [3, 2, 1]
 * 
 * Output: 1
 * 
 * Explanation: The third maximum is 1.
 * 
 * 
 * 
 * Example 2:
 * 
 * Input: [1, 2]
 * 
 * Output: 2
 * 
 * Explanation: The third maximum does not exist, so the maximum (2) is
 * returned instead.
 * 
 * 
 * 
 * Example 3:
 * 
 * Input: [2, 2, 3, 1]
 * 
 * Output: 1
 * 
 * Explanation: Note that the third maximum here means the third maximum
 * distinct number.
 * Both numbers with value 2 are both considered as second maximum.
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    for(let i = 0;i < nums.length;) {
        let index = nums.indexOf(nums[i], i + 1);
        if(index > 0) {
            nums.splice(index, 1);
        } else {
            i++;
        }
    }
    nums.sort((a,b) => b - a);
    let length = nums.length;
    if(length < 3) {
        return nums[0];
    } else {
        return nums[2];
    }
};
