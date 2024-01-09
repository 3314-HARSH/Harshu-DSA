//User function Template for javascript

/**
 * @param {number} n
 * @param {number} k
 * @returns {number}
 */

class Solution {
  countWays(n, k) {
    //code here
    if (k == 1) {
      if (n == 1) return 1;
      else return 0;
    }
    if (n == 1) return k;
    let lastSame = k; //for upto 2nd fence only
    let lastDiff = k * (k - 1);
    let totalWays = lastSame + lastDiff;

    for (let i = 3; i <= n; i++) {
      lastSame = lastDiff;
      lastDiff = totalWays * (k - 1);
      totalWays = (lastSame + lastDiff) % (10 ** 9 + 7);
    }
    return totalWays;
  }
}
