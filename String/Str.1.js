//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @param {number} k
 * @returns {number}
 */

class Solution {
  //Function to find all elements in array that appear more than n/k times.
  countOccurence(arr, n, k) {
    //your code here
    let data = new Map();
    for (let i = 0; i < n; i++) {
      if (data.has(arr[i])) {
        data.set(arr[i], data.get(arr[i]) + 1);
      } else data.set(arr[i], 1);
    }
    let count = 0;
    for (let X of data) {
      if (X[1] > n / k) {
        count++;
      }
    }

    return count;
  }
}
