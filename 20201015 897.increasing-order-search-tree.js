/*
 * @lc app=leetcode id=897 lang=javascript
 *
 * [897] Increasing Order Search Tree
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
 * @return {TreeNode}
 */
var increasingBST = function(root) {
    let ary = [];
    fun1(root);

    ary.sort(function(a, b){
        return a - b;
    });
    length = ary.length;
    console.log(ary);
    IncreasingTree = new TreeNode();

    fun2(IncreasingTree, ary, 0, length);

    return IncreasingTree;

    // 获取各节点的值
    function fun1(node) {
        if(node === null) {
            return ;
        }
        ary.push(parseInt(node.val));
        fun1(node.left);
        fun1(node.right);
    }

    // 生成树
    function fun2(node, ary, i, length) {
        // index = i;
        console.log(i)
        console.log(ary[i]);
        node.val = ary[i];
        node.left = null;
        if(i == length - 1) {
            node.right = null;
            return ;
        }
        node.right = new TreeNode();
        i = i + 1;
        fun2(node.right, ary, i, length);
        return ;
    }
};
// @lc code=end

