/*
 * @lc app=leetcode id=754 lang=javascript
 *
 * [754] Reach a Number
 *
 * https://leetcode.com/problems/reach-a-number/description/
 *
 * algorithms
 * Easy (31.73%)
 * Total Accepted:    8.7K
 * Total Submissions: 27.5K
 * Testcase Example:  '1'
 *
 * 
 * You are standing at position 0 on an infinite number line.  There is a goal
 * at position target.
 * 
 * On each move, you can either go left or right.  During the n-th move
 * (starting from 1), you take n steps.
 * 
 * Return the minimum number of steps required to reach the destination.
 * 
 * 
 * Example 1:
 * 
 * Input: target = 3
 * Output: 2
 * Explanation:
 * On the first move we step from 0 to 1.
 * On the second step we step from 1 to 3.
 * 
 * 
 * 
 * Example 2:
 * 
 * Input: target = 2
 * Output: 3
 * Explanation:
 * On the first move we step from 0 to 1.
 * On the second move we step  from 1 to -1.
 * On the third move we step from -1 to 2.
 * 
 * 
 * 
 * Note:
 * target will be a non-zero integer in the range [-10^9, 10^9].
 * 
 */
/**
 * @param {number} target
 * @return {number}
 */
var reachNumber = function(target) {
    target = Math.abs(target);
    let sum = 0;
    let k = 0;
    while(sum < target) {
        k++;
        sum += k;
    }
    console.log(k);
    if(sum === target) return k;
    let delta = sum - target;
    if(delta % 2 === 0) {
        return k;
    } else {
        if(k % 2 === 0) {
            return k + 1;
        } else {
            return k + 2;
        }
    }
};

