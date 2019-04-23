/*
 * [118] Pascal's Triangle
 *
 * https://leetcode.com/problems/pascals-triangle/description/
 *
 * algorithms
 * Easy (41.85%)
 * Total Accepted:    191.8K
 * Total Submissions: 458.2K
 * Testcase Example:  '5'
 *
 * Given a non-negative integer numRows, generate the first numRows of Pascal's
 * triangle.
 * 
 * 
 * In Pascal's triangle, each number is the sum of the two numbers directly
 * above it.
 * 
 * Example:
 * 
 * 
 * Input: 5
 * Output:
 * [
 * ⁠    [1],
 * ⁠   [1,1],
 * ⁠  [1,2,1],
 * ⁠ [1,3,3,1],
 * ⁠[1,4,6,4,1]
 * ]
 * 
 * 
 */
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if(numRows === 0){
        return [];
    }
    let tri = [];
    for(let i = 0;i < numRows;i++){
        tri[i] = [];
        tri[i][0] = tri[i][i] = 1;
    }
    if(numRows > 2){
        for(let i = 2;i < numRows;i++){
            for(let j = 1;j < i;j++){
                tri[i][j] = tri[i-1][j-1] + tri[i-1][j];
            }
        }
    };
    return tri;  
};
