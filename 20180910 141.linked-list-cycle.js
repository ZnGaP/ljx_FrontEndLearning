/*
 * [141] Linked List Cycle
 *
 * https://leetcode.com/problems/linked-list-cycle/description/
 *
 * algorithms
 * Easy (34.72%)
 * Total Accepted:    292.4K
 * Total Submissions: 842.3K
 * Testcase Example:  '[]\nno cycle'
 *
 * 
 * Given a linked list, determine if it has a cycle in it.
 * 
 * 
 * 
 * Follow up:
 * Can you solve it without using extra space?
 * 
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if(!head || !head.next){
        return false;
    }
    let front = head.next;
    let behind = head;
    while(front && front.next){
        if(front == behind){
            return true;
        }
        front = front.next.next;
        behind = behind.next;
    }
    return false;
};
