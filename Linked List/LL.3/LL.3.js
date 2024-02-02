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
//  Initialize "prev" as null to keep track of the previous value;
//  Initialize "current" as the head to represent the current node of linked list;
//  At each iteration:
//  1. Store the next node of the current node in temporary variable.
//  2. Connect the next of the current node with "prev";
//  3. Update "prev" with the current node.
//  4. Update "current"  with the temporarily stored variable

//   Continue this process until "current" points to null, indication the end the linked list;
var reverseList = function (head) {
  let prev = null;
  let curr = head;
  while (curr) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }
  head = prev;
  return head;
};
