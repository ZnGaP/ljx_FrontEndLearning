/*
 * [257] Binary Tree Paths
 *
 * https://leetcode.com/problems/binary-tree-paths/description/
 *
 * algorithms
 * Easy (43.10%)
 * Total Accepted:    183.1K
 * Total Submissions: 424.8K
 * Testcase Example:  '[1,2,3,null,5]'
 *
 * Given a binary tree, return all root-to-leaf paths.
 * 
 * Note: A leaf is a node with no children.
 * 
 * Example:
 * 
 * 
 * Input:
 * 
 * ⁠  1
 * ⁠/   \
 * 2     3
 * ⁠\
 * ⁠ 5
 * 
 * Output: ["1->2->5", "1->3"]
 * 
 * Explanation: All root-to-leaf paths are: 1->2->5, 1->3
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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    let paths = [];
    let path = '';
    add(root, paths, path);
    return paths;
    function add(root1, string_ary, string) {
        if(!root1) {
            return null;
        }
        string = string + root1.val + '->';
        if(!root1.left && !root1.right) {
            string = string.substr(0, string.length-2);
            string_ary.push(string);
        }
        add(root1.left, string_ary, string);
        add(root1.right, string_ary, string);
    }
};
