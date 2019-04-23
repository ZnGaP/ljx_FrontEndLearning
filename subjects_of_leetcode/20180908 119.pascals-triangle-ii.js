/*
 * [119] Pascal's Triangle II
 *
 * https://leetcode.com/problems/pascals-triangle-ii/description/
 *
 * algorithms
 * Easy (39.73%)
 * Total Accepted:    160.3K
 * Total Submissions: 403.4K
 * Testcase Example:  '3'
 *
 * Given a non-negative index k where k ≤ 33, return the kth index row of the
 * Pascal's triangle.
 * 
 * Note that the row index starts from 0.
 * 
 * 
 * In Pascal's triangle, each number is the sum of the two numbers directly
 * above it.
 * 
 * Example:
 * 
 * 
 * Input: 3
 * Output: [1,3,3,1]
 * 
 * 
 * Follow up:
 * 
 * Could you optimize your algorithm to use only O(k) extra space?
 * 
 */
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    if(rowIndex === 0){
        return [1];
    }else if(rowIndex === 1){
        return [1, 1];
    }else{
        let tri = [];
        let a = 1, 
        b = 2;
        tri[0] = tri[rowIndex] = 1;
        for(let i = 1;i < rowIndex;i++){
            tri[i] = combination(rowIndex, i);
        }
        function combination(a, b){
            let num = 1;
            for(;b > 0;a--,b--){
                num *= a/b;
            }
            return num;
        }
        return tri;
    }
};
