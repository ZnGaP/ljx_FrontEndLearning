/*
 * @lc app=leetcode id=965 lang=javascript
 *
 * [965] Univalued Binary Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isUnivalTree = function(root) {
    let set = new Set();
    fun1(root);
    return set.size == 1;

    function fun1(node) {
        if(node === null) return ;
        set.add(node.val);
        fun1(node.left);
        fun1(node.right);
    }
};
// @lc code=end

