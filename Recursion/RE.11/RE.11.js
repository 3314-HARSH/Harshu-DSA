/**
 * @param {number} n
 * @return {string[][]}
 */

//  At each iteration, we check if we place queen in the current cell or not to find out all possible way.
//  this is done via the `isSafeToPlace` function.
//  The purpose of this `isSafeToPlace function is to determine
//  wheather current cell is a prefect place to put a queen.
//  However, it does not check in all eight directions, rather, it checks only three directions.
//  this is because we are filling cell from left to right hence there is not element on the right side of element
//  so we only need to consider the following directions:
//  1.element left direction
//  2.element left-top direction
//  3. element left-botton direction
//  for direction check out image reference
//  if the `isSafeToPlace` function returns true, then we move to the next column
//  if not, then we move to the next row
//  this process is repeated recursively when the cloneSolveNQueens function calls itself again.
//  this recursive function iterates through the steps described above,

// time O(n^n)
// space O(n ^ 2)
var solveNQueens = function (n) {
  let ncn = Array.from({ length: n }, () => Array.from({ length: n }, () => 0));

  function isSafeToPlace(ncn, row, col, n) {
    let i = row,
      j = col;
    while (i >= 0 && j >= 0) {
      if (ncn[i][j] == 1) return false;
      i--;
      j--;
    }
    (i = row), (j = col);
    while (i < n && j >= 0) {
      if (ncn[i][j] == 1) return false;
      i++;
      j--;
    }
    (i = row), (j = col);
    while (j >= 0) {
      if (ncn[i][j] == 1) return false;
      j--;
    }
    return true;
  }

  function cloneSolveNQueens(ncn, n, col, ans) {
    if (col == n) {
      let temp = [];
      for (let i = 0; i < n; i++) {
        let str = "";
        for (let j = 0; j < n; j++) {
          if (ncn[i][j] == 1) {
            str += "Q";
          } else {
            str += ".";
          }
        }
        temp.push(str);
      }
      ans.push(temp);
      return ans;
    }

    for (let i = 0; i < n; i++) {
      if (isSafeToPlace(ncn, i, col, n)) {
        ncn[i][col] = 1;
        cloneSolveNQueens(ncn, n, col + 1, ans);
        ncn[i][col] = 0;
      }
    }
    return ans;
  }

  return cloneSolveNQueens(ncn, n, 0, []);
};
