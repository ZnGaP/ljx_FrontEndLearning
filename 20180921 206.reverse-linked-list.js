/*
 * [206] Reverse Linked List
 *
 * https://leetcode.com/problems/reverse-linked-list/description/
 *
 * algorithms
 * Easy (49.30%)
 * Total Accepted:    413.4K
 * Total Submissions: 838.3K
 * Testcase Example:  '[1,2,3,4,5]'
 *
 * Reverse a singly linked list.
 * 
 * Example:
 * 
 * 
 * Input: 1->2->3->4->5->NULL
 * Output: 5->4->3->2->1->NULL
 * 
 * 
 * Follow up:
 * 
 * A linked list can be reversed either iteratively or recursively. Could you
 * implement both?
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
 * @return {ListNode}
 */
var reverseList = function(head) {
    const head1 = head;
    let list = new ListNode(null);
    const l = list;
    do{
        while((head.next != list) && head.next){
            head = head.next;
        }
        list.next = head;
        list = list.next;
        list.next = null;
        head = head1;
    }while(list != head1);
    return l.next;
};
