/*
 * @lc app=leetcode id=812 lang=javascript
 *
 * [812] Largest Triangle Area
 *
 * https://leetcode.com/problems/largest-triangle-area/description/
 *
 * algorithms
 * Easy (55.18%)
 * Total Accepted:    13K
 * Total Submissions: 23.4K
 * Testcase Example:  '[[0,0],[0,1],[1,0],[0,2],[2,0]]'
 *
 * You have a list of points in the plane. Return the area of the largest
 * triangle that can be formed by any 3 of the points.
 * 
 * 
 * Example:
 * Input: points = [[0,0],[0,1],[1,0],[0,2],[2,0]]
 * Output: 2
 * Explanation: 
 * The five points are show in the figure below. The red triangle is the
 * largest.
 * 
 * 
 * 
 * 
 * Notes: 
 * 
 * 
 * 3 <= points.length <= 50.
 * No points will be duplicated.
 * -50 <= points[i][j] <= 50.
 * Answers within 10^-6 of the true value will be accepted as correct.
 * 
 * 
 * 
 * 
 */
/**
 * @param {number[][]} points
 * @return {number}
 */
var largestTriangleArea = function(points) {
    let maxArea = 0;
    for(let i = 0;i < points.length - 2;i++) {
        for(let j = i + 1;j < points.length - 1;j++) {
            for(let k = j + 1;k < points.length;k++) {
                maxArea = Math.max(maxArea, area(points[i], points[j], points[k]));
            }
        }
    }
    return Math.sqrt(maxArea) / 2;

    function area(point1, point2, point3) {
        let a = [point2[0] - point1[0], point2[1] - point1[1]];
        let b = [point3[0] - point1[0], point3[1] - point1[1]];
        return (a[0] ** 2 + a[1] ** 2) * (b[0] ** 2 + b[1] ** 2) - ((b[0] * a[0]) + (b[1] * a[1])) ** 2;
    }
};

