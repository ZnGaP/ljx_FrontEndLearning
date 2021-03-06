/*
 * [69] Sqrt(x)
 *
 * https://leetcode.com/problems/sqrtx/description/
 *
 * algorithms
 * Easy (29.44%)
 * Total Accepted:    264.2K
 * Total Submissions: 897.2K
 * Testcase Example:  '4'
 *
 * Implement int sqrt(int x).
 * 
 * Compute and return the square root of x, where x is guaranteed to be a
 * non-negative integer.
 * 
 * Since the return type is an integer, the decimal digits are truncated and
 * only the integer part of the result is returned.
 * 
 * Example 1:
 * 
 * 
 * Input: 4
 * Output: 2
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: 8
 * Output: 2
 * Explanation: The square root of 8 is 2.82842..., and since 
 * the decimal part is truncated, 2 is returned.
 * 
 * 
 */
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if(x == 1){
        return 1;
    };
    let left, right, mid;
            left = 0;
            right = x;
            mid = Math.floor((right + left) / 2);
            for(let i=0;;i++){
                if(mid * mid > x){
                    right = mid;
                }else{
                    left = mid;
                }
                console.log(mid);
                if(mid * mid <= x && (mid+1) * (mid+1) > x){
                    return mid;
                }
                mid = Math.floor((right + left) / 2);
            };
};
