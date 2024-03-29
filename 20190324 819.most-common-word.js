/*
 * @lc app=leetcode id=819 lang=javascript
 *
 * [819] Most Common Word
 *
 * https://leetcode.com/problems/most-common-word/description/
 *
 * algorithms
 * Easy (41.79%)
 * Total Accepted:    43.4K
 * Total Submissions: 103.5K
 * Testcase Example:  '"Bob hit a ball, the hit BALL flew far after it was hit."\n["hit"]'
 *
 * Given a paragraph and a list of banned words, return the most frequent word
 * that is not in the list of banned words.  It is guaranteed there is at least
 * one word that isn't banned, and that the answer is unique.
 * 
 * Words in the list of banned words are given in lowercase, and free of
 * punctuation.  Words in the paragraph are not case sensitive.  The answer is
 * in lowercase.
 * 
 * 
 * 
 * Example:
 * 
 * 
 * Input: 
 * paragraph = "Bob hit a ball, the hit BALL flew far after it was hit."
 * banned = ["hit"]
 * Output: "ball"
 * Explanation: 
 * "hit" occurs 3 times, but it is a banned word.
 * "ball" occurs twice (and no other word does), so it is the most frequent
 * non-banned word in the paragraph. 
 * Note that words in the paragraph are not case sensitive,
 * that punctuation is ignored (even if adjacent to words, such as "ball,"), 
 * and that "hit" isn't the answer even though it occurs more because it is
 * banned.
 * 
 * 
 * 
 * 
 * Note: 
 * 
 * 
 * 1 <= paragraph.length <= 1000.
 * 1 <= banned.length <= 100.
 * 1 <= banned[i].length <= 10.
 * The answer is unique, and written in lowercase (even if its occurrences in
 * paragraph may have uppercase symbols, and even if it is a proper noun.)
 * paragraph only consists of letters, spaces, or the punctuation symbols
 * !?',;.
 * There are no hyphens or hyphenated words.
 * Words only consist of letters, never apostrophes or other punctuation
 * symbols.
 * 
 * 
 */
/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    let words = paragraph.replace(/[\!\?\,\'\;\.]/g, ' ').toLocaleLowerCase().split(' ');
    console.log(words);
    let map = new Map();
    let maxCount = 1;
    for(let i = 0;i < words.length;i++) {
        word = words[i];
        if(word < 97 || word > 122 || banned.includes(word)) continue;
        if(map.has(word)) {
            map.set(word, map.get(word) + 1);
        } else {
            map.set(word, 1);
        }
        maxCount = Math.max(maxCount, map.get(word));
        console.log(maxCount);
    }
    return Array.from(map.keys())[Array.from(map.values()).indexOf(maxCount)];
};

