//User function Template for javascript

/**
 * @param {number[]} a
 * @param {number} n
 * @param {number} x
 * @return {number}
 */

class Solution {
  smallestSubWithSum(a, n, x) {
    //code here
    let i = 0,
      j = 0;
    let sum = a[0],
      count = Number.MAX_SAFE_INTEGER;
    while (j < n && i < n) {
      while (sum > x) {
        count = Math.min(j - i + 1, count);
        sum -= a[i];
        i++;
      }
      j++;
      if (j < n) {
        sum += a[j];
      }
    }
    return count == Number.MAX_SAFE_INTEGER ? 0 : count;
  }
}
