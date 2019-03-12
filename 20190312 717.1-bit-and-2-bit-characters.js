/*
 * @lc app=leetcode id=717 lang=javascript
 *
 * [717] 1-bit and 2-bit Characters
 *
 * https://leetcode.com/problems/1-bit-and-2-bit-characters/description/
 *
 * algorithms
 * Easy (48.89%)
 * Total Accepted:    36.5K
 * Total Submissions: 74.6K
 * Testcase Example:  '[1,0,0]'
 *
 * We have two special characters. The first character can be represented by
 * one bit 0. The second character can be represented by two bits (10 or
 * 11).  
 * 
 * Now given a string represented by several bits. Return whether the last
 * character must be a one-bit character or not. The given string will always
 * end with a zero.
 * 
 * Example 1:
 * 
 * Input: 
 * bits = [1, 0, 0]
 * Output: True
 * Explanation: 
 * The only way to decode it is two-bit character and one-bit character. So the
 * last character is one-bit character.
 * 
 * 
 * 
 * Example 2:
 * 
 * Input: 
 * bits = [1, 1, 1, 0]
 * Output: False
 * Explanation: 
 * The only way to decode it is two-bit character and two-bit character. So the
 * last character is NOT one-bit character.
 * 
 * 
 * 
 * Note:
 * 1 .
 * bits[i] is always 0 or 1.
 * 
 */
/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function(bits) {
    let len = bits.length;
    bits[len - 1] = 'end';
    for(let i = 0;i < len;i++) {
        switch(bits[i]) {
            case 1:
                i ++;
                break;
            case 'end':
                return true;
        }
    }
    return false;
};

