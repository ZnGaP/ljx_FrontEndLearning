/*
 * @lc app=leetcode id=506 lang=javascript
 *
 * [506] Relative Ranks
 *
 * https://leetcode.com/problems/relative-ranks/description/
 *
 * algorithms
 * Easy (47.91%)
 * Total Accepted:    39.6K
 * Total Submissions: 82.7K
 * Testcase Example:  '[5,4,3,2,1]'
 *
 * 
 * Given scores of N athletes, find their relative ranks and the people with
 * the top three highest scores, who will be awarded medals: "Gold Medal",
 * "Silver Medal" and "Bronze Medal".
 * 
 * Example 1:
 * 
 * Input: [5, 4, 3, 2, 1]
 * Output: ["Gold Medal", "Silver Medal", "Bronze Medal", "4", "5"]
 * Explanation: The first three athletes got the top three highest scores, so
 * they got "Gold Medal", "Silver Medal" and "Bronze Medal". For the left two
 * athletes, you just need to output their relative ranks according to their
 * scores.
 * 
 * 
 * 
 * Note:
 * 
 * N is a positive integer and won't exceed 10,000.
 * All the scores of athletes are guaranteed to be unique.
 * 
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var findRelativeRanks = function(nums) {
    let ranks = [];
    Array.prototype.push.apply(ranks, nums);
    ranks.sort((a, b) => b - a);
    nums[nums.indexOf(ranks[0])] = 'Gold Medal';
    nums[nums.indexOf(ranks[1])] = 'Silver Medal';
    nums[nums.indexOf(ranks[2])] = 'Bronze Medal';
    for(let i = 3;i < ranks.length;i++) {
        nums[nums.indexOf(ranks[i])] = String(i + 1);
    }
    return nums;
};

