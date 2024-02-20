/**
 * @param {number[][]} matrix
 * @return {number}
 */

//  recursion + memoization,
//  For memoization, we first initialize a 2D array with the same size as the matrix to store values
//  corresponding to each matrix value.
//  Then we iterate over the matrix values.
//  During iteration, we call a function that calculates the increasing-path value for each element.
//  we compare the current increasing path value with the previous maximun value and keep the maximum out of the two

//  The function called for each element of the matrix is recursive in nature.
//  it recursively checks the top , bottom , left and right directions.
//  finally, it returns the increasing-path value;
var longestIncreasingPath = function (matrix) {
  let rows = matrix.length;
  let cols = matrix[0].length;
  let data = Array.from({ length: rows }, () =>
    Array.from({ length: cols }, () => 0)
  );
  let max = 0;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      max = Math.max(max, clonePath(matrix, i, j, data));
    }
  }

  function clonePath(matrix, row, col, data) {
    if (row < 0 || col < 0 || row >= rows || col >= cols) return 0;
    if (data[row][col] > 0) return data[row][col];
    let top = 0;
    let bottom = 0;
    let left = 0;
    let right = 0;
    if (row - 1 >= 0 && matrix[row - 1][col] > matrix[row][col]) {
      top = clonePath(matrix, row - 1, col, data);
    }
    if (row + 1 < rows && matrix[row + 1][col] > matrix[row][col]) {
      bottom = clonePath(matrix, row + 1, col, data);
    }
    if (col - 1 >= 0 && matrix[row][col - 1] > matrix[row][col]) {
      left = clonePath(matrix, row, col - 1, data);
    }
    if (col + 1 < cols && matrix[row][col + 1] > matrix[row][col]) {
      right = clonePath(matrix, row, col + 1, data);
    }

    data[row][col] = Math.max(top, bottom, left, right) + 1;
    return data[row][col];
  }

  return max;
};
