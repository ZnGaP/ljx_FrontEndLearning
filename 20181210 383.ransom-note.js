/*
 * @lc app=leetcode id=383 lang=javascript
 *
 * [383] Ransom Note
 *
 * https://leetcode.com/problems/ransom-note/description/
 *
 * algorithms
 * Easy (48.75%)
 * Total Accepted:    96.9K
 * Total Submissions: 198.7K
 * Testcase Example:  '"a"\n"b"'
 *
 * 
 * Given an arbitrary ransom note string and another string containing letters
 * from all the magazines, write a function that will return true if the
 * ransom 
 * note can be constructed from the magazines ; otherwise, it will return
 * false. 
 * 
 * 
 * Each letter in the magazine string can only be used once in your ransom
 * note.
 * 
 * 
 * Note:
 * You may assume that both strings contain only lowercase letters.
 * 
 * 
 * 
 * canConstruct("a", "b") -> false
 * canConstruct("aa", "ab") -> false
 * canConstruct("aa", "aab") -> true
 * 
 * 
 */
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let MagArray = magazine.split('');
    for(let i = 0;i < ransomNote.length;i++){
        let index = MagArray.indexOf(ransomNote[i]);
        if(index >= 0) {
            MagArray.splice(index, 1);
        }else {
            return false;
        }
    }
    return true;
};
