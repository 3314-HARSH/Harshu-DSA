/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

// level order traversal
// time O(n) where n = number of nodes
// space O(n) where n = number of nodes
class Queues {
  constructor(arr = []) {
    this.arr = arr;
  }
  enqueue(val) {
    this.arr.push(val);
  }
  dequeue() {
    return this.arr.shift();
  }
  isEmpty() {
    return this.arr.length == 0;
  }
  length() {
    return this.arr.length;
  }
}
var rightSideView = function (root) {
  let ans = [];
  let data = new Queues();
  data.enqueue(root);
  while (!data.isEmpty()) {
    let size = data.length();
    let pn;
    for (let i = 0; i < size; i++) {
      pn = data.dequeue();
      if (pn && pn.left) data.enqueue(pn.left);
      if (pn && pn.right) data.enqueue(pn.right);
    }
    if (pn) ans.push(pn.val);
  }
  return ans;
};
