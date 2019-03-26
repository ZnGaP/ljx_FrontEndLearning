/*
 * @lc app=leetcode id=830 lang=javascript
 *
 * [830] Positions of Large Groups
 *
 * https://leetcode.com/problems/positions-of-large-groups/description/
 *
 * algorithms
 * Easy (47.45%)
 * Total Accepted:    23.5K
 * Total Submissions: 49.5K
 * Testcase Example:  '"abbxxxxzzy"'
 *
 * In a string S of lowercase letters, these letters form consecutive groups of
 * the same character.
 * 
 * For example, a string like S = "abbxxxxzyy" has the groups "a", "bb",
 * "xxxx", "z" and "yy".
 * 
 * Call a group large if it has 3 or more characters.  We would like the
 * starting and ending positions of every large group.
 * 
 * The final answer should be in lexicographic order.
 * 
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: "abbxxxxzzy"
 * Output: [[3,6]]
 * Explanation: "xxxx" is the single large group with starting  3 and ending
 * positions 6.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: "abc"
 * Output: []
 * Explanation: We have "a","b" and "c" but no large group.
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: "abcdddeeeeaabbbcd"
 * Output: [[3,5],[6,9],[12,14]]
 * 
 * 
 * 
 * Note:  1 <= S.length <= 1000
 * 
 */
/**
 * @param {string} S
 * @return {number[][]}
 */
var largeGroupPositions = function(S) {
    let groups = []
    let count = 1;
    let len = S.length;
    for(let i = 0;i < len - 1;i++) {
        if(S[i] !== S[i + 1]) {
            if(count >= 3) {
                groups.push([i- count + 1, i]);
            }
            count = 1;
        } else {
            count++;
        }
    }
    if(count >= 3) {
        groups.push([len - count, len - 1]);
    }
    return groups;
};

