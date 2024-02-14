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
 * @return {number[][]}
 */

// based on level order
class Queues {
  constructor(arr = []) {
    this.arr = arr;
  }
  enqueue(x) {
    this.arr.push(x);
  }
  dequeue() {
    return this.arr.shift();
  }
  peek() {
    return this.arr[0];
  }
  length() {
    return this.arr.length;
  }
  isEmpty() {
    return this.length() == 0;
  }
}

var zigzagLevelOrder = function (root) {
  let ans = [];
  if (!root) return ans;
  let data = new Queues();
  data.enqueue(root);
  let level = 0;
  while (!data.isEmpty()) {
    let temp = [];
    let size = data.length();
    for (let i = 0; i < size; i++) {
      let pd = data.dequeue();
      if (pd.left) data.enqueue(pd.left);
      if (pd.right) data.enqueue(pd.right);
      temp.push(pd.val);
    }
    if (level % 2 == 1) {
      temp.reverse();
    } else {
      temp;
    }
    ans.push(temp);
    level++;
  }
  return ans;
};
