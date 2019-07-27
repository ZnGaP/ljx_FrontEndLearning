/*
 * [234] Palindrome Linked List
 *
 * https://leetcode.com/problems/palindrome-linked-list/description/
 *
 * algorithms
 * Easy (34.23%)
 * Total Accepted:    192.6K
 * Total Submissions: 562.7K
 * Testcase Example:  '[1,2]'
 *
 * Given a singly linked list, determine if it is a palindrome.
 * 
 * Example 1:
 * 
 * 
 * Input: 1->2
 * Output: false
 * 
 * Example 2:
 * 
 * 
 * Input: 1->2->2->1
 * Output: true
 * 
 * Follow up:
 * Could you do it in O(n) time and O(1) space?
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
var isPalindrome = function(head) {
    let fast = slow = head;
    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    };
    if(fast) {
        slow = slow.next;
    }
    let prev = new ListNode(null);
    while(slow) {
        let temp = slow.next;
        slow.next = prev;
        prev = slow;
        slow = temp;
    }
    console.log(prev);
    while(prev.val != null) {
        console.log(prev.val);
        console.log(head.val);
        if(prev.val != head.val) {
            return false;
        }
        prev = prev.next;
        head = head.next;
    }
    return true;
};
