/*
 * @lc app=leetcode id=733 lang=javascript
 *
 * [733] Flood Fill
 *
 * https://leetcode.com/problems/flood-fill/description/
 *
 * algorithms
 * Easy (49.96%)
 * Total Accepted:    39.1K
 * Total Submissions: 78.3K
 * Testcase Example:  '[[1,1,1],[1,1,0],[1,0,1]]\n1\n1\n2'
 *
 * 
 * An image is represented by a 2-D array of integers, each integer
 * representing the pixel value of the image (from 0 to 65535).
 * 
 * Given a coordinate (sr, sc) representing the starting pixel (row and column)
 * of the flood fill, and a pixel value newColor, "flood fill" the image.
 * 
 * To perform a "flood fill", consider the starting pixel, plus any pixels
 * connected 4-directionally to the starting pixel of the same color as the
 * starting pixel, plus any pixels connected 4-directionally to those pixels
 * (also with the same color as the starting pixel), and so on.  Replace the
 * color of all of the aforementioned pixels with the newColor.
 * 
 * At the end, return the modified image.
 * 
 * Example 1:
 * 
 * Input: 
 * image = [[1,1,1],[1,1,0],[1,0,1]]
 * sr = 1, sc = 1, newColor = 2
 * Output: [[2,2,2],[2,2,0],[2,0,1]]
 * Explanation: 
 * From the center of the image (with position (sr, sc) = (1, 1)), all pixels
 * connected 
 * by a path of the same color as the starting pixel are colored with the new
 * color.
 * Note the bottom corner is not colored 2, because it is not 4-directionally
 * connected
 * to the starting pixel.
 * 
 * 
 * 
 * Note:
 * The length of image and image[0] will be in the range [1, 50].
 * The given starting pixel will satisfy 0  and 0 .
 * The value of each color in image[i][j] and newColor will be an integer in
 * [0, 65535].
 * 
 */
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
    const color = image[sr][sc];
    const len = image.length;
    const len1 = image[0].length;
    if(newColor !== color) {
        changeColor(image, sr, sc, newColor);
    }
    return image;
    function changeColor(image, sr, sc, newColor) {
        if(image[sr][sc] === color) {
            image[sr][sc] = newColor;
            if(sr >= 1) {
                changeColor(image, sr - 1, sc, newColor);
            }
            if(sc >= 1) {
                changeColor(image, sr, sc - 1, newColor);
            }
            if(sr <= len - 2) {
                changeColor(image, sr + 1, sc, newColor);
            }
            if(sc <= len1 - 2) {
                changeColor(image, sr, sc + 1, newColor);
            }
        }
    }
    
};

