/*
 * @lc app=leetcode id=953 lang=javascript
 *
 * [953] Verifying an Alien Dictionary
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
    for(let i = 0; i < words.length-1; i++) {
        if(isVerified(words[i], words[i+1])) {
            continue;
        } else {
            return false;
        }
    }
    return true;

    function isVerified(word1, word2) {
        let length1 = word1.length;
        let length2 = word2.length;
        let length = length1 < length2 ? length1 : length2;
        for(let i = 0; i < length; i++) {
            let index1 = order.indexOf(word1[i]);
            let index2 = order.indexOf(word2[i]);
            console.log(index1);
            console.log(index2);
            if(index1 < index2) {
                return true;
            } else if(index1 == index2) {
                continue
            } else {
                return false;
            }
        }
        if(length1 <= length2) {
            return true;
        } else {
            return false;
        }
    }
};
// @lc code=end

