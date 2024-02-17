/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */

var buildTree = function (inorder, postorder) {
  let i = inorder.length;
  let p = postorder.length;
  let data = new Map();
  for (let k = 0; k < i; k++) {
    data.set(inorder[k], k);
  }
  function cloneBuildTree(inorder, is, ie, postorder, ps, pe, data) {
    if (is > ie || ps > pe) return null;
    let root = new TreeNode(postorder[pe]);
    let inPosition = data.get(postorder[pe]);
    let numsLeft = inPosition - is;
    root.left = cloneBuildTree(
      inorder,
      is,
      inPosition - 1,
      postorder,
      ps,
      ps + numsLeft - 1,
      data
    );
    root.right = cloneBuildTree(
      inorder,
      inPosition + 1,
      ie,
      postorder,
      ps + numsLeft,
      pe - 1,
      data
    );
    return root;
  }
  return cloneBuildTree(inorder, 0, i - 1, postorder, 0, p - 1, data);
};
