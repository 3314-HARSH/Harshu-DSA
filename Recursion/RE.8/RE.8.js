/**
 * @param {string} s
 * @return {string[][]}
 */
function isPalindrome(str) {
  let i = 0,
    j = str.length - 1;
  while (i < j) {
    if (str[i] != str[j]) return false;
    i++;
    j--;
  }

  return true;
}
var partition = function (s) {
  function clonePartition(s, index, tempArr, ansArr) {
    if (s.length == index) {
      ansArr.push([...tempArr]);
      return ansArr;
    }
    let tempStr = "";
    for (let i = index; i < s.length; i++) {
      tempStr += s[i];
      tempArr.push(tempStr);
      if (isPalindrome(tempStr)) {
        clonePartition(s, i + 1, tempArr, ansArr);
      }
      tempArr.pop();
    }
    return ansArr;
  }

  return clonePartition(s, 0, [], []);
};
