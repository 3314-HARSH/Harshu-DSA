//User function Template for javascript

/**
 * @param {number[]} array
 * @param {number} a
 * @param {number} b
 */

class Solution {
  //Function to partition the array around the range such
  //that array is divided into three parts.
  threeWayPartition(array, a, b) {
    //your code here
    let i = 0,
      j = 0,
      k = array.length - 1;
    while (i <= k) {
      if (array[i] < a) {
        let temp = array[j];
        array[j] = array[i];
        array[i] = temp;
        i++;
        j++;
      } else if (array[i] > b) {
        let temp = array[k];
        array[k] = array[i];
        array[i] = temp;
        k--;
      } else {
        i++;
      }
    }
  }
}
