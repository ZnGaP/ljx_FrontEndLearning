/*
 * [303] Range Sum Query - Immutable
 *
 * https://leetcode.com/problems/range-sum-query-immutable/description/
 *
 * algorithms
 * Easy (34.79%)
 * Total Accepted:    113.5K
 * Total Submissions: 326.2K
 * Testcase Example:  '["NumArray","sumRange","sumRange","sumRange"]\n[[[-2,0,3,-5,2,-1]],[0,2],[2,5],[0,5]]'
 *
 * Given an integer array nums, find the sum of the elements between indices i
 * and j (i ≤ j), inclusive.
 * 
 * Example:
 * 
 * Given nums = [-2, 0, 3, -5, 2, -1]
 * 
 * sumRange(0, 2) -> 1
 * sumRange(2, 5) -> -1
 * sumRange(0, 5) -> -3
 * 
 * 
 * 
 * Note:
 * 
 * You may assume that the array does not change.
 * There are many calls to sumRange function.
 * 
 * 
 */
/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    let temp = [];
    nums.reduce(function(acc, cur, i){
        acc += cur
        temp[i] = acc;
        return acc;
    },0);//若为空数组，则不执行回调，此时必须写参数回调起点下标0，否则会报错。
    this.sumArray = temp;
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    if(i == 0){
        return this.sumArray[j];
    }else{
        return this.sumArray[j] - this.sumArray[i - 1];
    }
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = Object.create(NumArray).createNew(nums)
 * var param_1 = obj.sumRange(i,j)
 */
