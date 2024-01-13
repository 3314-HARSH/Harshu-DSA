//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @returns {number}
 */

class Solution {
  //Function to find the smallest positive number missing from the array.
  missingNumber(arr, n) {
    //your code here

    //place the all element with respect of their index means 0th index will store 1 and
    // 1th index will store 2 and so on; in between you find element greater than array
    // length simply move on or even negtaive number the move on simply

    let i = 0;
    while (i < n) {
      if (arr[i] > 0 && arr[i] <= n && arr[i] != arr[arr[i] - 1]) {
        let temp = arr[arr[i] - 1];
        arr[arr[i] - 1] = arr[i];
        arr[i] = temp;
      } else {
        i++;
      }
    }
    for (let i = 0; i < n; i++) {
      if (arr[i] != i + 1) return i + 1;
    }

    return n + 1;
  }
}
