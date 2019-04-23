/*
 * [345] Reverse Vowels of a String
 *
 * https://leetcode.com/problems/reverse-vowels-of-a-string/description/
 *
 * algorithms
 * Easy (40.23%)
 * Total Accepted:    131.8K
 * Total Submissions: 327.6K
 * Testcase Example:  '"hello"'
 *
 * Write a function that takes a string as input and reverse only the vowels of
 * a string.
 * 
 * Example 1:
 * 
 * 
 * Input: "hello"
 * Output: "holle"
 * 
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: "leetcode"
 * Output: "leotcede"
 * 
 * 
 * Note:
 * The vowels does not include the letter "y".
 * 
 * 
 * 
 */
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let sStr = s.split('');
    let reVow = [];
    for(let i = 0, j = 0;i < sStr.length;i++){
        let str = sStr[i];
        let lowerStr = str.toLocaleLowerCase();
        if(lowerStr == 'a' || lowerStr == 'e' || lowerStr == 'u' || lowerStr == 'i' || lowerStr == 'o'){
            reVow[j] = str;
            reVow[j+1] = i;
            j += 2;
        }
    }
    for(let i = reVow.length - 1, j = 1;i > 0;i -= 2, j += 2){
        sStr[reVow[j]] = reVow[i-1];
    }
    return sStr.join('');
};
