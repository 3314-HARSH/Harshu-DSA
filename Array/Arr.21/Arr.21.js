// } Driver Code Ends

//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @returns {number}
 */

class Solution {
  AlternatingaMaxLength(arr, n) {
    //code here
    let increment = 1,
      decrement = 1;
    for (let i = 1; i < n; i++) {
      if (arr[i - 1] == arr[i]) {
        continue;
      }
      if (arr[i - 1] < arr[i]) {
        increment = decrement + 1;
      } else {
        decrement = increment + 1;
      }
    }
    return Math.max(increment, decrement);
  }
}
