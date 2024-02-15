/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
// For serialization,
// To perform serialization we need to conduct level-order traversal.
// During level-order traversal. it's essential to ensure that if a node has a value but
// its left or right child is null, the null value should also be pushed into the queue.

//Time O(n)
//space O(1)

var serialize = function (root) {
  let str = "";
  if (!root) return "";
  let queue = [root];
  while (queue.length) {
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      let popEle = queue.shift();
      if (!popEle) {
        str += "#,";
        continue;
      }
      str += `${popEle.val},`;
      if (popEle && popEle.left) queue.push(popEle.left);
      if (popEle && !popEle.left) queue.push(null);
      if (popEle && popEle.right) queue.push(popEle.right);
      if (popEle && !popEle.right) queue.push(null);
    }
  }
  return str;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */

//  The first step involves coverting the data into an array.
//  The first element of array becomes root of the tree
//  Then, we put the first element of the array inside the queue
//  We initailize a while loop with condition that queue must have some elements
//  as the while loop runs, it dequeues the element from the queue.
//  The dequeued element becomes a node in the the tree
//  Its left child and right child will be the next element of the array.

// time O(n)
// space O(n)
var deserialize = function (data) {
  if (data == "") return null;
  data = data.split(",");
  data.pop();
  let dataArr = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i] == "#") dataArr.push(null);
    else dataArr.push(Number(data[i]));
  }

  let size = dataArr.length;
  if (size == 0) return [];
  let root = new TreeNode(dataArr[0]);
  let queue = [root];
  let i = 0;
  while (queue.length) {
    let node = queue.shift();
    i++;
    if (i < size && dataArr[i] != null) {
      node.left = new TreeNode(dataArr[i]);
      queue.push(node.left);
    }
    i++;
    if (i < size && dataArr[i] != null) {
      node.right = new TreeNode(dataArr[i]);
      queue.push(node.right);
    }
  }
  return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
