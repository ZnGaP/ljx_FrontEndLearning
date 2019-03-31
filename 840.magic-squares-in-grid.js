/*
 * @lc app=leetcode id=840 lang=javascript
 *
 * [840] Magic Squares In Grid
 *
 * https://leetcode.com/problems/magic-squares-in-grid/description/
 *
 * algorithms
 * Easy (35.09%)
 * Total Accepted:    11.2K
 * Total Submissions: 31.7K
 * Testcase Example:  '[[4,3,8,4],[9,5,1,9],[2,7,6,2]]'
 *
 * A 3 x 3 magic square is a 3 x 3 grid filled with distinct numbers from 1 to
 * 9 such that each row, column, and both diagonals all have the same sum.
 * 
 * Given an grid of integers, how many 3 x 3 "magic square" subgrids are
 * there?  (Each subgrid is contiguous).
 * 
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: [[4,3,8,4],
 * ⁠       [9,5,1,9],
 * ⁠       [2,7,6,2]]
 * Output: 1
 * Explanation: 
 * The following subgrid is a 3 x 3 magic square:
 * 438
 * 951
 * 276
 * 
 * while this one is not:
 * 384
 * 519
 * 762
 * 
 * In total, there is only one magic square inside the given grid.
 * 
 * 
 * Note:
 * 
 * 
 * 1 <= grid.length <= 10
 * 1 <= grid[0].length <= 10
 * 0 <= grid[i][j] <= 15
 * 
 * 
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
var numMagicSquaresInside = function(grid) {
    let len = grid.length;
    let len1 = grid[0].length;
    let count = 0;
    for(let i = 1;i < len - 1;i++) {
        let subgrid = [];
        subgrid.push(grid[i - 1].slice(0, 3), grid[i].slice(0, 3), grid[i + 1].slice(0, 3));
        for(let j = 1;j < len1 - 1;j++) {
            
        }
    }
    function isMagic(ary) {
        if(ary[1][1] !== 5) return ;
        
    }
};

