/*
 * @lc app=leetcode id=653 lang=javascript
 *
 * [653] Two Sum IV - Input is a BST
 *
 * https://leetcode.com/problems/two-sum-iv-input-is-a-bst/description/
 *
 * algorithms
 * Easy (51.96%)
 * Total Accepted:    78.4K
 * Total Submissions: 150.7K
 * Testcase Example:  '[5,3,6,2,4,null,7]\n9'
 *
 * Given a Binary Search Tree and a target number, return true if there exist
 * two elements in the BST such that their sum is equal to the given target.
 * 
 * Example 1:
 * 
 * 
 * Input: 
 * ⁠   5
 * ⁠  / \
 * ⁠ 3   6
 * ⁠/ \   \
 * 2   4   7
 * 
 * Target = 9
 * 
 * Output: True
 * 
 * 
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: 
 * ⁠   5
 * ⁠  / \
 * ⁠ 3   6
 * ⁠/ \   \
 * 2   4   7
 * 
 * Target = 28
 * 
 * Output: False
 * 
 * 
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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
    if(!root) return false;
    let nodes = [root];
    let values = [root.val];
    while(nodes.length > 0) {
        let node = nodes.shift();
        if(node.left) {
            nodes.push(node.left);
            values.push(node.left.val);
        }
        if(node.right) {
            nodes.push(node.right);
            values.push(node.right.val);
        }
    }
    console.log(values);
    for(let i = 0;i < values.length - 1;i++) {
        if(values.indexOf(k - values[i], i + 1) > 0) {
            return true;
        }
    }
    return false;
};

