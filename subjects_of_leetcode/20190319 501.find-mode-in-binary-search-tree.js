/*
 * @lc app=leetcode id=501 lang=javascript
 *
 * [501] Find Mode in Binary Search Tree
 *
 * https://leetcode.com/problems/find-mode-in-binary-search-tree/description/
 *
 * algorithms
 * Easy (38.87%)
 * Total Accepted:    50.8K
 * Total Submissions: 130.7K
 * Testcase Example:  '[1,null,2,2]'
 *
 * Given a binary search tree (BST) with duplicates, find all the mode(s) (the
 * most frequently occurred element) in the given BST.
 * 
 * Assume a BST is defined as follows:
 * 
 * 
 * The left subtree of a node contains only nodes with keys less than or equal
 * to the node's key.
 * The right subtree of a node contains only nodes with keys greater than or
 * equal to the node's key.
 * Both the left and right subtrees must also be binary search trees.
 * 
 * 
 * 
 * 
 * For example:
 * Given BST [1,null,2,2],
 * 
 * 
 * ⁠  1
 * ⁠   \
 * ⁠    2
 * ⁠   /
 * ⁠  2
 * 
 * 
 * 
 * 
 * return [2].
 * 
 * Note: If a tree has more than one mode, you can return them in any order.
 * 
 * Follow up: Could you do that without using any extra space? (Assume that the
 * implicit stack space incurred due to recursion does not count).
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
 * @return {number[]}
 */
var findMode = function(root) {
    let nums = [];
    Interative(root);
    nums.push(Infinity);
    let dupNum = [];
    let map = new Map();
    let max = 1,
        count = 1;
    for(let i = 0;i < nums.length - 1;i++) {
        if(nums[i] === nums[i + 1]) {
            count++;
        } else {
            map.set(nums[i], count);
            max = Math.max(count, max);
            count = 1;
        }
    }
    for(let key of map.keys()) {
        if(map.get(key) === max) {
            dupNum.push(key);
        }
    }
    return dupNum;
    function Interative(node) {
        if(node) {
            Interative(node.left);
            nums.push(node.val);
            Interative(node.right);
        }
    }
};
