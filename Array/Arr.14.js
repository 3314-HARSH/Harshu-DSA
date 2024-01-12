//User function Template for javascript

/**
 * @param {number[][]} matrix
 * @param {number} r
 * @param {number} c
 * @returns {number[]}
 */
class Solution {
  //Function to return a list of integers denoting spiral traversal of matrix.
  spirallyTraverse(matrix, r, c) {
    // code here
    let ansArr = [];
    let top = 0,
      bottom = r - 1,
      left = 0,
      right = c - 1;
    while (top <= bottom && left <= right) {
      for (let i = left; i <= right; i++) {
        ansArr.push(matrix[top][i]);
      }
      top++;
      if (top > bottom) break;

      for (let i = top; i <= bottom; i++) {
        ansArr.push(matrix[i][right]);
      }
      right--;
      if (right < left) break;

      for (let i = right; i >= left; i--) {
        ansArr.push(matrix[bottom][i]);
      }
      bottom--;

      for (let i = bottom; i >= top; i--) {
        ansArr.push(matrix[i][left]);
      }
      left++;
    }
    return ansArr;
  }
}
