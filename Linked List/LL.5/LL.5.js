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
//  This question is based on tortoise and hare algorithm
//  Slow pointer moves one step at time
//  while Fast pointer moves two step at time
//  when fast pointer meets with slow pointer,
// it's indicate that there is a cycle in Linked list
//
var hasCycle = function (head) {
  let slow = head,
    fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow == fast) {
      return true;
    }
  }

  return false;
};
