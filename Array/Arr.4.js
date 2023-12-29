//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @param {number} x
 * @return {number[]}
 */

class Solution {
  find(arr, n, x) {
    //code here
    let i = 0,
      j = n - 1;
    let ansArr = [-1, -1];
    while (i <= j) {
      let mid = Math.floor((i + j) / 2);
      if (
        (mid - 1 >= 0 && arr[mid - 1] < x && arr[mid] == x) ||
        (mid - 1 < 0 && arr[mid] == x)
      ) {
        ansArr[0] = mid;
        break;
      } else if (arr[mid] >= x) {
        j = mid - 1;
      } else {
        i = mid + 1;
      }
    }
    if (ansArr[0] == -1) return ansArr;
    (i = 0), (j = n - 1);
    while (i <= j) {
      let mid = Math.floor((i + j) / 2);
      if (
        (mid + 1 < n && arr[mid + 1] > x && arr[mid] == x) ||
        (mid + 1 >= n && arr[mid] == x)
      ) {
        ansArr[1] = mid;
        break;
      } else if (arr[mid] > x) {
        j = mid - 1;
      } else {
        i = mid + 1;
      }
    }
    return ansArr;
  }
}
