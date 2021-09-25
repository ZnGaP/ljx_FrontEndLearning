/*
 * @lc app=leetcode id=1009 lang=javascript
 *
 * [1009] Complement of Base 10 Integer
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var bitwiseComplement = function(n) {
    if(n == 0) {return 1;}
    if(n == 1) {return 0;}
    let head = new Node(0);
    let node1 = head;
    let number = n;
    let time = 0;
    while(number) {
        node1.next = new Node(0);
        node1 = node1.next;
        if(number % 2 == 0) {
            node1.element = 1;
        } else {
            node1.element = 0;
        }
        time++;
        number = Math.floor(number / 2);
        console.log(node1);
    }

    node1 = head.next;
    console.log(node1)
    let sum = 0;
    for(let i=0; i < time-1; i++) {
        sum += node1.element * Math.pow(2, i);
        node1 = node1.next;
    }
    return sum;

    function Node(e) {
        this.element = e;
        this.next = null;
    }
};
// @lc code=end

