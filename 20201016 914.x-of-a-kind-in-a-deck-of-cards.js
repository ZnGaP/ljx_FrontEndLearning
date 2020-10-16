/*
 * @lc app=leetcode id=914 lang=javascript
 *
 * [914] X of a Kind in a Deck of Cards
 */

// @lc code=start
/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
    deck.sort(function(a, b) {
        return a - b;
    })

    let count = 1;
    let countAry = [];
    for(let i=0; i < deck.length-1; i++) {
        if(deck[i] == deck[i+1]) {
            count++;
        } else {
            countAry.push(count);
            count = 1;
        }
    }
    countAry.push(count);

    let min = Math.min.apply(null, countAry);

    if(min == 1) return false;

    let factor = [];
    for(let i = 2; i <= min; i++){
        if(min % i == 0) factor.push(i);
    }
    
    for(let i = 0; i < factor.length; i++) {
        let f = factor[i];
        let flag = true;
        for(let j = 0; j < countAry.length; j++) {
            if(countAry[j] % f != 0) {
                flag = false;
                break;
            }
        }
        if(flag) {
            return true;
        }
    }

    return false;
};
// @lc code=end

