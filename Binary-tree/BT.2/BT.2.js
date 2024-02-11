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
var preorderTraversal = function (root) {
  //recursive way
  //  function clonePreorderTraversal(root , ansArr){
  //       if(!root) return ansArr;
  //       ansArr.push(root.val)
  //       clonePreorderTraversal(root.left , ansArr)
  //       clonePreorderTraversal(root.right , ansArr)
  //       return ansArr;
  //  }
  //       return clonePreorderTraversal(root , [])

  // iterative way
  let curr = root;
  let ansArr = [];
  while (curr) {
    if (curr.left) {
      let prev = curr.left;
      while (prev.right && curr != prev.right) {
        prev = prev.right;
      }
      if (curr == prev.right) {
        prev.right = null;
        curr = curr.right;
      } else {
        prev.right = curr;
        ansArr.push(curr.val);
        curr = curr.left;
      }
    } else {
      ansArr.push(curr.val);
      curr = curr.right;
    }
  }
  return ansArr;
};
