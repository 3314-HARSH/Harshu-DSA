/**
 * @param {string} digits
 * @return {string[]}
 */
// time O(k**n) where k = number of alphabet corresponding to that number
// n = number of digits
// space : O(n + k**n) where n defines internal stack space
let data = new Map([
  ["2", ["a", "b", "c"]],
  ["3", ["d", "e", "f"]],
  ["4", ["g", "h", "i"]],
  ["5", ["j", "k", "l"]],
  ["6", ["m", "n", "o"]],
  ["7", ["p", "q", "r", "s"]],
  ["8", ["t", "u", "v"]],
  ["9", ["w", "x", "y", "z"]],
]);

var letterCombinations = function (digits) {
  let digitArr = [];
  if (digits.length == 0) return digitArr;
  for (let i = 0; i < digits.length; i++) {
    if (digits[i] == "1") return [];
    digitArr.push(digits[i]);
  }

  function cloneLetterCombinations(digitArr, index, str, ansArr) {
    if (index == digitArr.length) {
      ansArr.push(str);
      return ansArr;
    }

    for (let i = 0; i < data.get(digitArr[index]).length; i++) {
      let tempStr = `${str}${data.get(digitArr[index])[i]}`;
      cloneLetterCombinations(digitArr, index + 1, tempStr, ansArr);
    }

    return ansArr;
  }

  return cloneLetterCombinations(digitArr, 0, "", []);
};
