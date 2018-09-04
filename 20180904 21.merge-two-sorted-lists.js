/*
 * [21] Merge Two Sorted Lists
 *
 * https://leetcode.com/problems/merge-two-sorted-lists/description/
 *
 * algorithms
 * Easy (42.89%)
 * Total Accepted:    398.3K
 * Total Submissions: 928.7K
 * Testcase Example:  '[1,2,4]\n[1,3,4]'
 *
 * Merge two sorted linked lists and return it as a new list. The new list
 * should be made by splicing together the nodes of the first two lists.
 * 
 * Example:
 * 
 * Input: 1->2->4, 1->3->4
 * Output: 1->1->2->3->4->4
 * 
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    function ListNode(val){
        this.val = val;
        this.next = null;
    }
    let l = new ListNode(null);
    const preHead = l;
    while(l1 && l2){
        if(l1.val < l2.val){
            l.next = l1;
            l1 = l1.next;
        }else{
            l.next = l2;
            l2 = l2.next;
        };
        l = l.next;
    }
    l.next = l1 || l2;
    return preHead.next;
};
