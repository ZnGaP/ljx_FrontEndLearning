/*
 * @lc app=leetcode id=437 lang=javascript
 *
 * [437] Path Sum III
 *
 * https://leetcode.com/problems/path-sum-iii/description/
 *
 * algorithms
 * Easy (41.86%)
 * Total Accepted:    92K
 * Total Submissions: 219.7K
 * Testcase Example:  '[10,5,-3,3,2,null,11,3,-2,null,1]\n8'
 *
 * You are given a binary tree in which each node contains an integer value.
 * 
 * Find the number of paths that sum to a given value.
 * 
 * The path does not need to start or end at the root or a leaf, but it must go
 * downwards
 * (traveling only from parent nodes to child nodes).
 * 
 * The tree has no more than 1,000 nodes and the values are in the range
 * -1,000,000 to 1,000,000.
 * 
 * Example:
 * 
 * root = [10,5,-3,3,2,null,11,3,-2,null,1], sum = 8
 * 
 * ⁠     10
 * ⁠    /  \
 * ⁠   5   -3
 * ⁠  / \    \
 * ⁠ 3   2   11
 * ⁠/ \   \
 * 3  -2   1
 * 
 * Return 3. The paths that sum to 8 are:
 * 
 * 1.  5 -> 3
 * 2.  5 -> 2 -> 1
 * 3. -3 -> 11
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
 * @param {number} sum
 * @return {number}
 */
var pathSum = function(root, sum) {
    let count = 0;
    if(!root) return 0;
    let nodes = [root];
    let i = 0;
    while(i < nodes.length) {
        let temp = nodes[i];
        if(nodes[i].left) nodes.push(nodes[i].left)
        if(nodes[i].right) nodes.push(nodes[i].right);
        i++;
    }
    for(i = 0;i < nodes.length;i++) {
        getSum(nodes[i], sum);
    }
    return count;
    function getSum(node, sum1) {
        if(!node) return;
        if(node.val === sum1) {
            count++;
        }
        getSum(node.left, sum1 - node.val);
        getSum(node.right, sum1 - node.val);
    }
};

