/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    for(let i = 0;i < nums.length - 1;i++){
        for(let j = 1;j <= k && i + j < nums.length;j++){
            if(nums[i] === nums[i + j]){
                return true;
            }
        }
    }
   return false;
};