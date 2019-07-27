/*
 * [349] Intersection of Two Arrays
 *
 * https://leetcode.com/problems/intersection-of-two-arrays/description/
 *
 * algorithms
 * Easy (51.17%)
 * Total Accepted:    175.5K
 * Total Submissions: 343K
 * Testcase Example:  '[1,2,2,1]\n[2,2]'
 *
 * Given two arrays, write a function to compute their intersection.
 * 
 * Example 1:
 * 
 * 
 * Input: nums1 = [1,2,2,1], nums2 = [2,2]
 * Output: [2]
 * 
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
 * Output: [9,4]
 * 
 * 
 * Note:
 * 
 * 
 * Each element in the result must be unique.
 * The result can be in any order.
 * 
 * 
 * 
 * 
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let returnArray = [];
    if(nums1.length > nums2.length){
        let nums;
        nums = nums1;
        nums1 = nums2;
        nums2 = nums;
    }
    nums1.sort((a, b) => a - b);
    for(let i = 0;i < nums1.length - 1;){
        let number = nums1[i];
        if(number === nums1[i + 1]){
            nums1.splice(i+1,1);
        }else{
            i++;
        }
    }
    for(let i = 0, j = 0;i < nums1.length;i++){
        if(nums2.indexOf(nums1[i]) >= 0){
            returnArray[j] = nums1[i];
            j++;
        }
    }
    return returnArray;
};
