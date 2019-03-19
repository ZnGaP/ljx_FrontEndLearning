/*
 * @lc app=leetcode id=427 lang=javascript
 *
 * [427] Construct Quad Tree
 *
 * https://leetcode.com/problems/construct-quad-tree/description/
 *
 * algorithms
 * Easy (54.48%)
 * Total Accepted:    6.7K
 * Total Submissions: 12.2K
 * Testcase Example:  '[[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0]]'
 *
 * We want to use quad trees to store an N x N boolean grid. Each cell in the
 * grid can only be true or false. The root node represents the whole grid. For
 * each node, it will be subdivided into four children nodes until the values
 * in the region it represents are all the same.
 * 
 * Each node has another two boolean attributes : isLeaf and val. isLeaf is
 * true if and only if the node is a leaf node. The val attribute for a leaf
 * node contains the value of the region it represents.
 * 
 * Your task is to use a quad tree to represent a given grid. The following
 * example may help you understand the problem better:
 * 
 * Given the 8 x 8 grid below, we want to construct the corresponding quad
 * tree:
 * 
 * 
 * 
 * It can be divided according to the definition above:
 * 
 * 
 * 
 * 
 * 
 * The corresponding quad tree should be as following, where each node is
 * represented as a (isLeaf, val) pair.
 * 
 * For the non-leaf nodes, val can be arbitrary, so it is represented as *.
 * 
 * 
 * 
 * Note:
 * 
 * 
 * N is less than 1000 and guaranteened to be a power of 2.
 * If you want to know more about the quad tree, you can refer to its wiki.
 * 
 * 
 */
/**
 * // Definition for a QuadTree node.
 * function Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 *    this.val = val;
 *    this.isLeaf = isLeaf;
 *    this.topLeft = topLeft;
 *    this.topRight = topRight;
 *    this.bottomLeft = bottomLeft;
 *    this.bottomRight = bottomRight;
 * };
 */
/**
 * @param {number[][]} grid
 * @return {Node}
 */
var construct = function(grid) {
    let n = grid.length;
    return buildTree(grid, 0, 0, n, n);
    function buildTree(ary, r1, c1, r2, c2) {
        if(r1 >= r2 || c1 >= c2) return null;
        let isLeaf = true;
        let val = ary[r1][c1];
        let rowMid = Math.floor((r1 + r2) / 2),
            colMid = Math.floor((c1 + c2) / 2);
        for(let i = r1;i < r2;i++) {
            for(let j = c1;j < c2;j++) {
                if(ary[i][j] !== val) {
                    isLeaf = false;
                    break;
                }
            }
        }
        if(isLeaf) return new Node(val === 1, true, null, null, null, null);
        return new Node(true, false,
            buildTree(ary, r1, c1, rowMid, colMid),
            buildTree(ary, r1, colMid, rowMid, c2),
            buildTree(ary, rowMid, c1, r2, colMid),
            buildTree(ary, rowMid, colMid, r2, c2));
    }
};