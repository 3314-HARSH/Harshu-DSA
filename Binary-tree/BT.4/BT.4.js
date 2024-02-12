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
var inorderTraversal = function (root) {
  // recursion
  // Time O(n) where n = number of nodes
  // Space O(n + logh) where h = height of tree (recursive stack space)

  // function cloneInorderTraversal(root , arr){
  //    if(!root) return arr;
  //    cloneInorderTraversal(root.left , arr)
  //    arr.push(root.val)
  //    cloneInorderTraversal(root.right , arr)
  //    return arr
  // }
  // return cloneInorderTraversal(root , [])

  // iterative way [ Morris Traversal ]
  // Time O(n) where n = number of nodes
  // Space O(n)
  // Before moving to the next node, if the current node has a left child,
  // first connect the rightmost element of the current node's left subtree to the current node.
  // Then proceed to traverse the left subtree.
  // After coming from rightmost element of the current node's left subtree to the current node,
  // undo the additional connection made earlier.
  // added picture for reference
  // 1. After coming from rightmost element of the current node's left subtree to the current node,
  // ensure push current element to ansArr as well,
  // 2. if there is no left child of current node then push it directly into ansArr and procced to right child
  let curr = root;
  let ansArr = [];
  while (curr) {
    if (curr.left) {
      let prev = curr.left;
      while (prev.right && curr != prev.right) {
        prev = prev.right;
      }
      if (prev.right == curr) {
        ansArr.push(curr.val);
        prev.right = null;
        curr = curr.right;
      } else {
        prev.right = curr;
        curr = curr.left;
      }
    } else {
      ansArr.push(curr.val);
      curr = curr.right;
    }
  }
  return ansArr;
};
