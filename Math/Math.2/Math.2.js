/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let str = String(x);
  let i = 0,
    j = str.length - 1;
  while (i <= j) {
    if (str[i] != str[j]) return false;
    i++;
    j--;
  }
  return true;
};
