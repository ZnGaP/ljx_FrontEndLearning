/*
 * @lc app=leetcode id=500 lang=javascript
 *
 * [500] Keyboard Row
 *
 * https://leetcode.com/problems/keyboard-row/description/
 *
 * algorithms
 * Easy (61.65%)
 * Total Accepted:    82.3K
 * Total Submissions: 133.5K
 * Testcase Example:  '["Hello","Alaska","Dad","Peace"]'
 *
 * Given a List of words, return the words that can be typed using letters of
 * alphabet on only one row's of American keyboard like the image
 * below.
 * 
 * 
 * 
 * 
 * 
 * 
 * Example:
 * 
 * 
 * Input: ["Hello", "Alaska", "Dad", "Peace"]
 * Output: ["Alaska", "Dad"]
 * 
 * 
 * 
 * 
 * Note:
 * 
 * 
 * You may use one character in the keyboard more than once.
 * You may assume the input string will only contain letters of alphabet.
 * 
 * 
 */
/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    let str = [];
    let ary = [];
    ary[0] = new Set(['q','w','e','r','t','y','u','i','o','p'])
    ary[1] = new Set(['a','s','d','f','g','h','j','k','l']);
    ary[2] = new Set(['z','x','c','v','b','n','m']);
    for(let i = 0;i < words.length;i++) {
        let set = new Set();
        let str1 = words[i].toLocaleLowerCase();
        console.log(str1);
        for(let j = 0;j < 3;j++) {
            if(ary[j].has(str1.charAt(0))) {
                ary[j].forEach(function(value) {
                    set.add(value);
                })
                break;
            }
        }
        console.log(set);
        const size = set.size;
        console.log(size);
        let flag = true;
        for(let k = 0;k < str1.length;k++) {
            set.add(str1.charAt(k));
            if(set.size > size) {
                flag = false;
                break;
            };
        }
        if(flag) {
            str.push(words[i]);
        }
    }
    return str;
};

