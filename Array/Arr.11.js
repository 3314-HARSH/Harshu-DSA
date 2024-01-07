//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @returns {number}
 */
class Solution {
  //Function to count subarrays with sum equal to 0.
  findSubarray(arr, n) {
    // code here
    // example [0,0,5,5,0,0]
    // initialize map with 0 and its frequency 1 , sum = 0 , count = 0
    //  for iteration, it will check inside the map that element is there or not
    // if it is, then increase the count with prevFrq(in this case it is 1)
    // and increase the freq of that element by 1
    // and count = 1
    // next iteration, we know 0 is present inside the map with freq 2,
    // this count will increase by 2,
    // remember we are storing sum not array element,
    let data = new Map();
    data.set(0, 1);
    let sum = 0,
      count = 0;
    for (let i = 0; i < n; i++) {
      sum += arr[i];
      if (data.has(sum)) {
        let prevFeq = data.get(sum);
        count += prevFeq;
        data.set(sum, prevFeq + 1);
      } else {
        data.set(sum, 1);
      }
    }
    return count;
  }
}
