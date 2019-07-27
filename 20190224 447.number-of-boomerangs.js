/*
 * @lc app=leetcode id=447 lang=javascript
 *
 * [447] Number of Boomerangs
 *
 * https://leetcode.com/problems/number-of-boomerangs/description/
 *
 * algorithms
 * Easy (49.07%)
 * Total Accepted:    50.4K
 * Total Submissions: 102.7K
 * Testcase Example:  '[[0,0],[1,0],[2,0]]'
 *
 * Given n points in the plane that are all pairwise distinct, a "boomerang" is
 * a tuple of points (i, j, k) such that the distance between i and j equals
 * the distance between i and k (the order of the tuple matters).
 * 
 * Find the number of boomerangs. You may assume that n will be at most 500 and
 * coordinates of points are all in the range [-10000, 10000] (inclusive).
 * 
 * Example:
 * 
 * Input:
 * [[0,0],[1,0],[2,0]]
 * 
 * Output:
 * 2
 * 
 * Explanation:
 * The two boomerangs are [[1,0],[0,0],[2,0]] and [[1,0],[2,0],[0,0]]
 * 
 * 
 */
/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function(points) {
    let numbers = [];
    function distance(p1, p2) {
        let num1 = p1[0] - p2[0],
            num2 = p1[1] - p2[1];
        return num1 * num1 + num2 * num2;
    }
    for(let i = 0;i < points.length - 2;i++) {
        for(let j = i + 1;j < points.length - 1;j++) {
            for(let k = j + 1;k < points.length;k++) {
                let d1 = distance(points[i], points[j]),
                    d2 = distance(points[i], points[k]),
                    d3 = distance(points[j], points[k]);
                if(d1 === d2) {
                    numbers.push([points[i], points[j], points[k]], [points[i], points[k], points[j]]);
                }
                if(d1 === d3) {
                    numbers.push([points[j], points[i], points[k]], [points[j], points[k], points[i]]);
                }
                if(d3 === d2) {
                    numbers.push([points[k], points[j], points[i]], [points[k], points[i], points[j]]);
                }
            }
        }
    }
    return numbers.length;
};
