/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

//  Iterate over the board to find the letter that is equal to the first letter of the word
//  Call the recursion function for each of those letters one by one
//  In the recursion function:
//  For each letter, check the left , right , top and bottom by moving one step only
//  to match the next letter of the word
//  if a match is found, assign 0 in place of that particular letter
//  so that can be avoid same letter cell may
//  not be used more than once and move on in search of next letter of the word
//  if no match is found , return false;
//  upon return from recursion function, reassign that particular place with its actual
//  value

var exist = function (board, word) {
  let m = board.length;
  let n = board[0].length;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] == word[0]) {
        let result = cloneExist(board, word, m, n, i, j, 0);
        if (result) return true;
      }
    }
  }

  function cloneExist(squareBoard, word, m, n, row, column, index) {
    if (index == word.length) return true;
    if (row < 0 || row >= m) return false;
    if (column < 0 || column >= n) return false;
    if (squareBoard[row][column] != word[index]) return false;
    if (squareBoard[row][column] == word[index]) {
      squareBoard[row][column] = 0;
      index++;
    }
    let result =
      cloneExist(squareBoard, word, m, n, row - 1, column, index) ||
      cloneExist(squareBoard, word, m, n, row + 1, column, index) ||
      cloneExist(squareBoard, word, m, n, row, column - 1, index) ||
      cloneExist(squareBoard, word, m, n, row, column + 1, index);
    index--;
    squareBoard[row][column] = word[index];
    return result;
  }
  return false;
};
