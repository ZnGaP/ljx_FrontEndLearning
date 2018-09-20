/*
 * [204] Count Primes
 *
 * https://leetcode.com/problems/count-primes/description/
 *
 * algorithms
 * Easy (27.09%)
 * Total Accepted:    178.9K
 * Total Submissions: 660.2K
 * Testcase Example:  '10'
 *
 * Count the number of prime numbers less than a non-negative number, n.
 * 
 * Example:
 * 
 * 
 * Input: 10
 * Output: 4
 * Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.
 * 
 * 
 */
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    if(n <= 2){
        return 0;
    }else if(n == 3){
        return 1;
    }else if(n <= 5){
        return 2;
    }
    let PrimesArray = [3];
    function isPrimes(num){
        let l = PrimesArray.length;
        let num_sqrt = Math.floor(Math.sqrt(num));
        for(i = 0;i < l && PrimesArray[i] <= num_sqrt;i++){
            if(num % PrimesArray[i] == 0){
                return false;
            }
        }
        PrimesArray.push(num);
    };
    for(let j = 1;j <= n / 6;j++){
        isPrimes(6 * j - 1);
        if(6 * j + 1 < n){
            isPrimes(6 * j + 1);
        }
    };
    console.log(PrimesArray);
    return PrimesArray.length + 1;
};
