/*
 * @lc app=leetcode id=530 lang=javascript
 *
 * [530] Minimum Absolute Difference in BST
 *
 * https://leetcode.com/problems/minimum-absolute-difference-in-bst/description/
 *
 * algorithms
 * Easy (49.84%)
 * Total Accepted:    54.7K
 * Total Submissions: 109.7K
 * Testcase Example:  '[1,null,3,2]'
 *
 * Given a binary search tree with non-negative values, find the minimum
 * absolute difference between values of any two nodes.
 * 
 * Example:
 * 
 * 
 * Input:
 * 
 * ⁠  1
 * ⁠   \
 * ⁠    3
 * ⁠   /
 * ⁠  2
 * 
 * Output:
 * 1
 * 
 * Explanation:
 * The minimum absolute difference is 1, which is the difference between 2 and
 * 1 (or between 2 and 3).
 * 
 * 
 * 
 * 
 * Note: There are at least two nodes in this BST.
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
var getMinimumDifference = function(root) {
    let set = new Set();
    getValue(root);
    let values = Array.from(set);
    let len = values.length;
    if(len === 1) return 0;
    let minimum = Infinity;
    for(let i = 0;i < len - 1;i++) {
        for(let j = i + 1;j < len;j++) {
            minimum = Math.min(minimum, Math.abs(values[i] - values[j]));
        }
    }
    return minimum;
    function getValue(node) {
        if(!node) {
            return ;
        }
        set.add(node.val);
        getValue(node.left);
        getValue(node.right);
    }
};

