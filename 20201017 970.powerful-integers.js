/*
 * @lc app=leetcode id=970 lang=javascript
 *
 * [970] Powerful Integers
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} y
 * @param {number} bound
 * @return {number[]}
 */
var powerfulIntegers = function(x, y, bound) {
    if(x == 1 && y == 1 && bound >= 2) {
        return [2];
    }

    let numbers = [];

    for(let k = 2; k <= bound; k++) {
        fun1(k);
    }
    return numbers;

    function fun1(num) {
        let xRight = Math.floor(Math.log(num) / Math.log(x));
        if(x == 1 || y == 1) {
            x = y === 1 ? x : y;
            y = 1;
            for(let i = 0; i <= xRight; i++) {
                result = Math.pow(x, i) + 1;
                if(result === num) {
                    numbers.push(num);
                    return ;
                }
            }
        } else {
            for(let i = 0; i <= xRight; i++) {
                let j = 0;
                while(1) {
                    result = Math.pow(x, i) + Math.pow(y, j);
                    if(result === num) {
                        numbers.push(num);
                        return ;
                    }
                    if(result > num) break;
                    j++;
                }
            }
        }
        return ;
    }
};
// @lc code=end

