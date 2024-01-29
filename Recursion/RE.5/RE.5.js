/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  function cloneCombinationSum3(arr, k, n, index, tempArr, ansArr, tempSum) {
    if (tempArr.length == k) {
      if (tempSum == n) ansArr.push([...tempArr]);
      return ansArr;
    }
    if (index == arr.length) return ansArr;
    //take it
    tempArr.push(arr[index]);
    tempSum += arr[index];
    cloneCombinationSum3(arr, k, n, index + 1, tempArr, ansArr, tempSum);

    //not take it
    tempArr.pop();
    tempSum -= arr[index];
    cloneCombinationSum3(arr, k, n, index + 1, tempArr, ansArr, tempSum);

    return ansArr;
  }

  return cloneCombinationSum3([1, 2, 3, 4, 5, 6, 7, 8, 9], k, n, 0, [], [], 0);
};
