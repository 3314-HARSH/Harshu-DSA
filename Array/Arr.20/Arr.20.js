//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @returns {BigInt}
 */

class Solution {
  //Function to count subarrays with 1s and 0s.
  countSubarrWithEqualZeroAndOne(arr, n) {
    // code here

    // let's consider 0 as -1 and 1 as 1
    // initialize current sum = 0 and store the sum frequency inside hashmap
    // sum is present inside the hashmap add its prior frequncy

    let data = new Map();
    data.set(0, 1);
    let currSum = 0;
    let totalSubArr = 0;
    for (let i = 0; i < n; i++) {
      if (arr[i] == 0) {
        currSum -= 1;
      } else {
        currSum += 1;
      }

      if (data.has(currSum)) {
        totalSubArr += data.get(currSum);
        data.set(currSum, data.get(currSum) + 1);
      } else {
        data.set(currSum, 1);
      }
    }

    return totalSubArr;
  }
}
