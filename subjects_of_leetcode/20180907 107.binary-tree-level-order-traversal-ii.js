/*
 * [107] Binary Tree Level Order Traversal II
 *
 * https://leetcode.com/problems/binary-tree-level-order-traversal-ii/description/
 *
 * algorithms
 * Easy (43.54%)
 * Total Accepted:    181.4K
 * Total Submissions: 416.2K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * Given a binary tree, return the bottom-up level order traversal of its
 * nodes' values. (ie, from left to right, level by level from leaf to root).
 * 
 * 
 * For example:
 * Given binary tree [3,9,20,null,null,15,7],
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * 
 * 
 * 
 * return its bottom-up level order traversal as:
 * 
 * [
 * ⁠ [15,7],
 * ⁠ [9,20],
 * ⁠ [3]
 * ]
 * 
 * 
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    if(!root){
        return [];
    }else{
        let bottom_up = [];
        createArray(root, bottom_up, 0);
        return bottom_up.reverse();
    };
    function createArray(node, array, level){
        if(typeof array[level] === 'undefined'){
            array[level] = [];
        }
        array[level].push(node.val);
        if(node.left != null){
            createArray(node.left, array, level+1);
        }
        if(node.right != null){
            createArray(node.right, array, level+1);
        }
    };
};
