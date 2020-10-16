/*
 * @lc app=leetcode id=938 lang=javascript
 *
 * [938] Range Sum of BST
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
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function(root, L, R) {
    let sum = 0;
    fun1(root);
    return sum;
    function fun1(node) {
        if(node == null) return ;
        let val = node.val;
        if(val >= L && val <= R) {
            sum += val;
        }
        fun1(node.left);
        fun1(node.right);
        return;
    }
};
// @lc code=end

