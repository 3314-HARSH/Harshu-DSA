/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  function cloneGenerateParenthesis(str, n, close, open, ansArr) {
    if (open == close && open == n) {
      ansArr.push(str);
      str = "";
      return ansArr;
    }
    if (open < n) {
      let copyStr = str;
      copyStr += "(";
      cloneGenerateParenthesis(copyStr, n, close, open + 1, ansArr);
    }
    if (close < open) {
      let copyStr = str;
      copyStr += ")";
      cloneGenerateParenthesis(copyStr, n, close + 1, open, ansArr);
    }
    return ansArr;
  }

  return cloneGenerateParenthesis("", n, 0, 0, []);
};
