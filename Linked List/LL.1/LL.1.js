//User function Template for javascript

/**
 * @param {Node} head1
 * @param {Node} head2
 * @returns {Node}
 */

/*
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
*/

class Solution {
  findIntersection(head1, head2) {
    //your code here
    let list = new Map();
    let curr = head1;
    while (curr) {
      if (list.has(curr.data)) {
        list.set(curr.data, list.get(curr.data) + 1);
      } else {
        list.set(curr.data, 1);
      }
      curr = curr.next;
    }
    let ansNode = new Node(0);
    let tailNode = ansNode;
    let curr1 = head2;
    while (curr1) {
      if (list.has(curr1.data) && list.get(curr1.data) > 0) {
        let node = new Node(curr1.data);
        tailNode.next = node;
        tailNode = node;
        list.set(curr1.data, list.get(curr1.data) - 1);
      }
      curr1 = curr1.next;
    }
    return ansNode.next;
  }
}
