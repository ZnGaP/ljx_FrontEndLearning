/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    if(nums == []){
        return false;
    }
    let ary = [];
    ary[nums[0]] = 0;
    for(let i = 1;i < nums.length;i++){
        if(ary[nums[i]] != undefined){
            return true;
        }
        ary[nums[i]] = i;
    }
    return false;
};