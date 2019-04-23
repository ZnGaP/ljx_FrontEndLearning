/*
 * @lc app=leetcode id=703 lang=javascript
 *
 * [703] Kth Largest Element in a Stream
 *
 * https://leetcode.com/problems/kth-largest-element-in-a-stream/description/
 *
 * algorithms
 * Easy (44.95%)
 * Total Accepted:    24.5K
 * Total Submissions: 54.2K
 * Testcase Example:  '["KthLargest","add","add","add","add","add"]\n[[3,[4,5,8,2]],[3],[5],[10],[9],[4]]'
 *
 * Design a class to find the kth largest element in a stream. Note that it is
 * the kth largest element in the sorted order, not the kth distinct element.
 * 
 * Your KthLargest class will have a constructor which accepts an integer k and
 * an integer array nums, which contains initial elements from the stream. For
 * each call to the method KthLargest.add, return the element representing the
 * kth largest element in the stream.
 * 
 * Example:
 * 
 * 
 * int k = 3;
 * int[] arr = [4,5,8,2];
 * KthLargest kthLargest = new KthLargest(3, arr);
 * kthLargest.add(3);   // returns 4
 * kthLargest.add(5);   // returns 5
 * kthLargest.add(10);  // returns 5
 * kthLargest.add(9);   // returns 8
 * kthLargest.add(4);   // returns 8
 * 
 * 
 * Note: 
 * You may assume that nums' length ≥ k-1 and k ≥ 1.
 * 
 */
/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.k = k;
    this.nums = nums;
    this.num1 = [];
    this.nums.forEach(element => {
        this.num1.push(element);
    });
    this.num1.sort((a, b) => b - a);
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    for(let i = 0;i < this.num1.length;i++) {
        if(val >= this.num1[i]) {
            this.num1.splice(i, 0, val);
            return this.num1[this.k - 1];
        }
    }
    this.num1.push(val);
    return this.num1[this.k - 1];
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = Object.create(KthLargest).createNew(k, nums)
 * var param_1 = obj.add(val)
 */

