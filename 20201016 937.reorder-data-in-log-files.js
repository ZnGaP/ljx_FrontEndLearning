/*
 * @lc app=leetcode id=937 lang=javascript
 *
 * [937] Reorder Data in Log Files
 */

// @lc code=start
/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function(logs) {
    let digs = [];
    let lets = [];
    for(let i = 0; i < logs.length; i++) {
        let log = logs[i];
        let lastword = log.slice(log.length-1,log.length);
        if(lastword >= 'a' && lastword <= 'z') {
            lets.push(log);
        } else {
            digs.push(log);
        }
    }
    
    lets.sort(fun1);
    console.log(lets);
    return lets.concat(digs);

    function fun1(str1, str2) {
        let str1Ary = str1.split(' ');
        let str2Ary = str2.split(' ');
        let iden1 = str1Ary.shift();
        let iden2 = str2Ary.shift();
        console.log(str1Ary);
        console.log(str2Ary);
        let str11 = str1Ary.join(' ');
        let str22 = str2Ary.join(' ');
        let result = str11.localeCompare(str22);
        if(result == 0) {
            return iden1.localeCompare(iden2);
        }
        return result;
    }
};
// @lc code=end

