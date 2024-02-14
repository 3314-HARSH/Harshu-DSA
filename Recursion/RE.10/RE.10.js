/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

//  At each iteration, identify the empty cell and try out all possible numbers from 1 to 9 to fill that cell.
//  The function `canIFill` will assist in this process by determining whether a given number can be placed
// in a particular cell.
// for this it checks that the specified number is not already present in the row, column and 3*3 grid

// time O(9^81) where 9 -> number of possibility and 81 -> number of cell
// space O(1)

function canIFill(board, row, col, char) {
  for (let i = 0; i < 9; i++) {
    if (char == board[row][i]) return false;
    if (char == board[i][col]) return false;
    if (
      char ==
      board[3 * Math.floor(row / 3) + Math.floor(i / 3)][
        3 * Math.floor(col / 3) + (i % 3)
      ]
    )
      return false;
  }
  return true;
}
var solveSudoku = function (board) {
  function cloneSolveSudoku(board) {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (board[i][j] == ".") {
          for (let k = 1; k < 10; k++) {
            if (canIFill(board, i, j, `${k}`)) {
              board[i][j] = `${k}`;
              let val = cloneSolveSudoku(board);
              if (val) return true;
              else board[i][j] = ".";
            }
          }
          return false;
        }
      }
    }
    return true;
  }
  cloneSolveSudoku(board);
  return board;
};
