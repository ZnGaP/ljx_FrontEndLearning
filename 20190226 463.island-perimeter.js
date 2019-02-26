/*
 * @lc app=leetcode id=463 lang=javascript
 *
 * [463] Island Perimeter
 *
 * https://leetcode.com/problems/island-perimeter/description/
 *
 * algorithms
 * Easy (60.23%)
 * Total Accepted:    121.6K
 * Total Submissions: 202K
 * Testcase Example:  '[[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]'
 *
 * You are given a map in form of a two-dimensional integer grid where 1
 * represents land and 0 represents water.
 * 
 * Grid cells are connected horizontally/vertically (not diagonally). The grid
 * is completely surrounded by water, and there is exactly one island (i.e.,
 * one or more connected land cells).
 * 
 * The island doesn't have "lakes" (water inside that isn't connected to the
 * water around the island). One cell is a square with side length 1. The grid
 * is rectangular, width and height don't exceed 100. Determine the perimeter
 * of the island.
 * 
 * 
 * 
 * Example:
 * 
 * 
 * Input:
 * [[0,1,0,0],
 * ⁠[1,1,1,0],
 * ⁠[0,1,0,0],
 * ⁠[1,1,0,0]]
 * 
 * Output: 16
 * 
 * Explanation: The perimeter is the 16 yellow stripes in the image below:
 * 
 * 
 * 
 * 
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    let len = grid.length,
        len1 = grid[0].length;
    let sum = 0,
        count = 0;
    for(let i = 0;i < len;i++) {
        sum += grid[i].reduce((pre, cur) => pre + cur);
    }
    for(let i = 0;i < len - 1;i++) {
        for(let j = 0;j < len1;j++) {
            if(grid[i][j] === 1 && grid[i+1][j] === 1) {
                count++;
            }
        }
    }
    for(let i = 0;i < len;i++) {
        for(let j = 0;j < len1 - 1;j++) {
            if(grid[i][j] === 1 && grid[i][j+1] === 1) {
                count++;
            }
        }
    }
    return sum * 4 - count * 2;
};
