//User function Template for javascript

/**
 * @param {string} n
 * @return {string}
 */

class Solution {
  removeDuplicates(str) {
    //code here
    let data = new Set();
    for (let i = 0; i < str.length; i++) {
      data.add(str[i]);
    }
    let ans = "";
    for (let X of data) {
      ans += X;
    }
    return ans;
  }
}
