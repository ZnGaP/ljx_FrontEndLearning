/*
 * @lc app=leetcode id=917 lang=javascript
 *
 * [917] Reverse Only Letters
 */

// @lc code=start
/**
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function(S) {
    let SAry = S.split('');
    console.log(SAry);
    let i = 0,
        j = S.length - 1;
    while(i < j) {
        let char1 = SAry[i],
            char2 = SAry[j];
        if(notLetter(char1)) {
            i++;
            continue;
        }
        if(notLetter(char2)) {
            j--;
            continue;
        }
        SAry[i] = char2;
        SAry[j] = char1;
        i++;
        j--;
    }

    return SAry.join('');

    function notLetter(char) {
        if((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
            return false;
        }
        return true;
    }
};
// @lc code=end

