//User function Template for javascript
/**
 * @param {number[]} a
 * @param {number} n
 * @param {number} k
 * @returns {number}
 */

class Solution {
  //Function to count number of subarrays with product less than k.
  //concept
  // [1,2,3,4]
  // if j = 2 , then how many number of subarrays you can make with including 3
  // [3],[2,3],[1,2,3]
  // you will always get j+1

  //-----------------------------------------------------------

  // first if k == 0 and k == 1 then return 0 bz in given array all are positive, means
  // number starts from 1 and we are counting number which is less than k
  // example [80 , 10 , 3 , 4] and k = 30
  // first iteration
  // j = 0
  // product = 80
  // if k is greater than product then start moving i pointer and divide the product
  // with ith element untill it's less than k
  // at end i = 1
  // count will increase by j - i + 1
  countSubArrayProductLessThanK(a, n, k) {
    //your code here
    let i = 0,
      j = 0,
      count = 0,
      product = 1;
    if (k == 0 || k == 1) return 0;
    while (j < n) {
      product *= a[j];
      while (i < n && product >= k) {
        product /= a[i];
        i++;
      }
      count += j - i + 1;
      j++;
    }
    return count;
  }
}
