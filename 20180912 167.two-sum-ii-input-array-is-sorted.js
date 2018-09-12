/*
 * [167] Two Sum II - Input array is sorted
 *
 * https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/
 *
 * algorithms
 * Easy (47.52%)
 * Total Accepted:    167.1K
 * Total Submissions: 351.6K
 * Testcase Example:  '[2,7,11,15]\n9'
 *
 * Given an array of integers that is already sorted in ascending order, find
 * two numbers such that they add up to a specific target number.
 * 
 * The function twoSum should return indices of the two numbers such that they
 * add up to the target, where index1 must be less than index2.
 * 
 * Note:
 * 
 * 
 * Your returned answers (both index1 and index2) are not zero-based.
 * You may assume that each input would have exactly one solution and you may
 * not use the same element twice.
 * 
 * 
 * Example:
 * 
 * 
 * Input: numbers = [2,7,11,15], target = 9
 * Output: [1,2]
 * Explanation: The sum of 2 and 7 is 9. Therefore index1 = 1, index2 = 2.
 * 
 */
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let index = [];
    let length = numbers.length;
    for(let i = 0;numbers[i] <= target && i < length - 1;i++){
        index[0] = i + 1;
        let rest = target - numbers[i];
        if(rest > numbers[length - 1]){
            continue;
        }
        for(let j = i + 1;j < length;j++){
            if(rest === numbers[j]){
                index[1] = j + 1;
                return index;
            }else if(rest < numbers[j]){
                break;
            }
        }
    }
    return [];
};
