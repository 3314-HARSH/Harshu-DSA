/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
//  This question is based on tortoise and hare algorithm
//  Slow pointer moves one step at time
//  while Fast pointer moves two step at time
//  when fast pointer points to null or
//  fast pointer'next points to null, it's indicate that slow
//  points to the mid
var middleNode = function (head) {
  let slow = head,
    fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};
