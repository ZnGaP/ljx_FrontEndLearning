/*
 * @lc app=leetcode id=884 lang=javascript
 *
 * [884] Uncommon Words from Two Sentences
 *
 * https://leetcode.com/problems/uncommon-words-from-two-sentences/description/
 *
 * algorithms
 * Easy (60.46%)
 * Total Accepted:    26K
 * Total Submissions: 42.9K
 * Testcase Example:  '"this apple is sweet"\n"this apple is sour"'
 *
 * We are given two sentences A and B.  (A sentence is a string of space
 * separated words.  Each word consists only of lowercase letters.)
 * 
 * A word is uncommon if it appears exactly once in one of the sentences, and
 * does not appear in the other sentence.
 * 
 * Return a list of all uncommon words. 
 * 
 * You may return the list in any order.
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: A = "this apple is sweet", B = "this apple is sour"
 * Output: ["sweet","sour"]
 * 
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: A = "apple apple", B = "banana"
 * Output: ["banana"]
 * 
 * 
 * 
 * 
 * Note:
 * 
 * 
 * 0 <= A.length <= 200
 * 0 <= B.length <= 200
 * A and B both contain only spaces and lowercase letters.
 * 
 * 
 * 
 * 
 */
/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
var uncommonFromSentences = function(A, B) {
    let uncommon = new Set();
    let set = new Set();
    let sen = A + ' ' + B;
    let sen_Ary = sen.split(' ');
    for(let i = 0;i < sen_Ary.length;i++) {
        let word = sen_Ary[i];
        if(!set.has(word)) {
            set.add(word);
            uncommon.add(word);
        } else {
            if(uncommon.has(word)) {
                uncommon.delete(word);
            }
        }
    }
    return Array.from(uncommon);
};

