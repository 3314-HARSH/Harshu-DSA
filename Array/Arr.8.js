//User function Template for javascript

/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number} n
 * @param {number} m
 * @param {number} k
 * @returns {number}
 */

class Solution {
  kthElement(A, B, n, m, k) {
    //code here
    // we are trying to apply sorting algo on small array,
    // A(array) is big, trying to swap their position with the if condition
    //if k value is greater than array size of B, then we are 100% sure that
    // we should take some value from array A, that's why we don't start i from 0
    // each time for example arr1=[1,2,3,4] , arr2=[5,6] and k = 4 , then i will start
    // from k - length of arr2
    // j pointer will indicate alway the min value of k and length of arr1, why bz
    // if k is very less , there is no point to apply binary search for after kth
    // element
    // we are apply partition method
    // ex: [2,3,6,7,9] , [1,4,8,10] , k=5
    //  first pattern
    //  2 , 3 , 6     7 , 9
    //  1 , 4        8 , 10
    //  if l1 = 4 , l2 = 6 , r1 = 8 , r2 = 7
    //  if l1<=r1 and l2<=r2 then it's a prefect combination then return max of l1,l2
    // second pattern
    //  2 , 3 ,           6 , 7 , 9
    //  1 , 4 , 8        10
    // l1>r2 then move left

    // third pattern
    // 2 , 3 , 6 , 7        9
    //  1                     4 , 8 , 10
    // l2 > r1 then move right

    // **make sure mid1 is a part of right half

    // time O(log(min of k and n)) space O(1)
    if (n > m) return this.kthElement(B, A, m, n, k);
    let i = Math.max(0, k - m),
      j = Math.min(k, n);
    while (i <= j) {
      let mid1 = Math.floor((i + j) / 2);
      let mid2 = k - mid1;
      let l1 = Number.MIN_SAFE_INTEGER,
        l2 = Number.MIN_SAFE_INTEGER,
        r1 = Number.MAX_SAFE_INTEGER,
        r2 = Number.MAX_SAFE_INTEGER;
      if (mid1 < n) r1 = A[mid1];
      if (mid1 - 1 >= 0) l1 = A[mid1 - 1];
      if (mid2 < m) r2 = B[mid2];
      if (mid2 - 1 >= 0) l2 = B[mid2 - 1];
      if (l1 <= r2 && l2 <= r1) {
        return Math.max(l1, l2);
      } else if (l1 > r2) {
        j = mid1 - 1;
      } else {
        i = mid1 + 1;
      }
    }

    // here we are concept of merging
    // in the time of merging we are decreasing the value of k
    // if checking if k is 0 then assign into target and return
    // time O(n) space O(1)
    // let i = 0 , j = 0 , target = -1
    // while(i < n && j < m){
    //     if(A[i] > B[j]){
    //       k--
    //       if(k == 0) {
    //           target = B[j]
    //           break;
    //       }
    //       j++
    //     }else{
    //         k--
    //         if( k == 0){
    //           target = A[i]
    //           break;
    //         }
    //         i++
    //     }
    // }
    // while(i < n){
    //     k--
    //      if( k == 0) {
    //          target = A[i]
    //          break;
    //      }
    //      i++

    // }
    // while( j < m){
    //     k--
    //     if(k == 0){
    //         target = B[j]
    //         break;
    //     }
    //     j++

    // }
    // return target;
  }
}
