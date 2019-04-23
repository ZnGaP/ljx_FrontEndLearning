/*
 * @lc app=leetcode id=543 lang=javascript
 *
 * [543] Diameter of Binary Tree
 *
 * https://leetcode.com/problems/diameter-of-binary-tree/description/
 *
 * algorithms
 * Easy (46.24%)
 * Total Accepted:    119.4K
 * Total Submissions: 257.4K
 * Testcase Example:  '[1,2,3,4,5]'
 *
 * 
 * Given a binary tree, you need to compute the length of the diameter of the
 * tree. The diameter of a binary tree is the length of the longest path
 * between any two nodes in a tree. This path may or may not pass through the
 * root.
 * 
 * 
 * 
 * Example:
 * Given a binary tree 
 * 
 * ⁠         1
 * ⁠        / \
 * ⁠       2   3
 * ⁠      / \     
 * ⁠     4   5    
 * 
 * 
 * 
 * Return 3, which is the length of the path [4,2,1,3] or [5,2,1,3].
 * 
 * 
 * Note:
 * The length of path between two nodes is represented by the number of edges
 * between them.
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
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    if(!root) return 0;
    let longest = 0;
    let ary = [];
    ary.push(root);
    while(ary.length !== 0) {
        let p = ary.pop();
        longest = Math.max(longest, depth(p.left) + depth(p.right));
        if(p.left) {
            ary.push(p.left);
        }
        if(p.right) {
            ary.push(p.right);
        }
    }
    return longest;
    function depth(node) {
        if(!node) {
            return 0;
        } else {
            return Math.max(depth(node.left), depth(node.right)) + 1;
        }
    }
};

