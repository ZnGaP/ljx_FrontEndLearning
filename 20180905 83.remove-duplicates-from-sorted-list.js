/*
 * [83] Remove Duplicates from Sorted List
 *
 * https://leetcode.com/problems/remove-duplicates-from-sorted-list/description/
 *
 * algorithms
 * Easy (40.82%)
 * Total Accepted:    259.1K
 * Total Submissions: 634.8K
 * Testcase Example:  '[1,1,2]'
 *
 * Given a sorted linked list, delete all duplicates such that each element
 * appear only once.
 * 
 * Example 1:
 * 
 * 
 * Input: 1->1->2
 * Output: 1->2
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: 1->1->2->3->3
 * Output: 1->2->3
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
var deleteDuplicates = function(head) {
    function ListNode(val){
        this.val = val;
        this.next = null;
    }
    let l = new ListNode(null);
    const preHead = l;
    l.next = head;
    l = l.next;
    while(head && head.next){
        if(head.val != head.next.val){
            l.next = head.next;
            l = l.next;
        }
        head = head.next;
    }
    if(l){
        l.next = null;
    }
    return preHead.next;
};
