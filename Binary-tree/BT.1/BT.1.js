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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  // time and space O(n)
  //    let stack = [root]
  //    while(stack.length > 0){
  //        let curr = stack.pop()
  //        if(curr && curr.right){
  //            stack.push(curr.right)
  //        }
  //        if(curr && curr.left){
  //            stack.push(curr.left)
  //        }

  //        if(stack.length > 0){
  //            curr.right = stack[stack.length - 1]
  //        }
  //        if(curr) curr.left = null
  //    }

  // time O(n) and space O(n)
  let curr = root;
  while (curr) {
    if (curr.left) {
      let prev = curr.left;
      while (prev.right) {
        prev = prev.right;
      }
      prev.right = curr.right;
      curr.right = curr.left;
      curr.left = null;
    }
    curr = curr.right;
  }
};
