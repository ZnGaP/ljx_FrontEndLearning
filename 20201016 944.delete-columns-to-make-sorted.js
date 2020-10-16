/*
 * @lc app=leetcode id=944 lang=javascript
 *
 * [944] Delete Columns to Make Sorted
 */

// @lc code=start
/**
 * @param {string[]} A
 * @return {number}
 */
var minDeletionSize = function(A) {
    let length = A[0].length;
    let columns = []
    for(let i = 0; i < length; i++) {
        let column = []
        for(let j = 0; j < A.length; j++) {
            column.push(A[j][i]);
        }
        columns.push(column);
    }

    let count = 0;
    for(let k = 0; k < length; k++) {
        if(isSorted(columns[k])) {
            continue;
        }
        count++;
    }

    return count;
    
    function isSorted(ary) {
        for(let i = 0; i < ary.length-1; i++) {
            if(ary[i] > ary[i+1]) {
                return false;
            }
        }
        return true;
    }
};
// @lc code=end

