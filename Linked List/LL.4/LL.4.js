/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

//  consider the example: 1 -> 2 -> 3 -> 4 -> 5,  and let k = 2
//  At each iteration or function call:
//  1.Form a group of length of k (e.g., 1 -> 2 -> null)
//  2.Pass this group to the reverse function, resulting in (2 -> 1 -> null)
//  3.In the first iteration, upadate the head to be the return value of reverse function;

//  In the second iteration:
//  1.Form a group of  length of k (e.g., 3 -> 4 -> null)
//  2.Pass this group to the reverse function , in result u will get (4 -> 3 -> null)
//  3.Connect the returned head of the reverse function with
//  the previous node pass as an argument

//  Continue this process until no group of size k is formed. In such cases,
//  simple connect the head node pass an argument to the previous node

function reverse(head) {
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
}
var reverseKGroup = function (head, k) {
  function cloneReverseKGroup(headNode, k, flag, prev) {
    let node1 = headNode;
    let node2 = null;
    let curr = headNode; // curr , it is for iteration
    let i = 1;
    while (curr && i < k) {
      i++;
      curr = curr.next;
    }

    if (i >= k && curr) {
      node2 = curr.next;
      curr.next = null;
      let node = reverse(node1);
      if (flag) {
        // helps to set the head node
        flag = false;
        head = node;
      }
      if (prev) {
        // helps to connect with previous node
        prev.next = node;
      }
      prev = node1;
      cloneReverseKGroup(node2, k, flag, prev);
    } else prev.next = headNode;
  }

  cloneReverseKGroup(head, k, true, null);
  return head;
};
