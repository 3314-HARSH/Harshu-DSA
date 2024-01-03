//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @returns {number}
 */

class Solution {
  // Function to find the trapped water between the blocks.
  trappingWater(arr, n) {
    //your code here

    //example [3,0,0,2,0,4]
    // we are having two array which will tell you info about particular element in arr
    // leftArr will tell you left max-value, before ith index.
    // rightArr will tell you right max-value, after ith index.
    // compare both of them find the min one, subtract with ith index value
    // it will give you how much water that particular can hold

    // time(0(n)) and space O(n)

    // let rightMaxArr = new Array(n)
    // let leftMaxArr = new Array(n)
    // leftMaxArr[n-1] = arr[n-1]
    // rightMaxArr[0] = arr[0]
    // let rightMax = arr[0] , leftMax = arr[n-1]
    // for(let i = 1; i < n ; i++){
    //     rightMax = Math.max(rightMax , arr[i-1])
    //     rightMaxArr[i] = rightMax
    // }
    // for(let i = n - 2; i >= 0 ; i--){
    //     leftMax = Math.max(leftMax , arr[i + 1])
    //     leftMaxArr[i] = leftMax
    // }
    // let store = 0
    // for(let i = 1 ; i < n - 1 ; i++){
    //     let min = Math.min(leftMaxArr[i] , rightMaxArr[i])
    //     if(min > arr[i]){
    //         store+=(min-arr[i])
    //     }
    // }
    // return store;

    // time 0(n) space O(1)
    let leftMax = arr[0],
      rightMax = arr[n - 1];
    let i = 1,
      j = n - 2;
    let water = 0;
    while (i <= j) {
      if (leftMax > rightMax) {
        if (rightMax > arr[j]) {
          water += rightMax - arr[j];
        }
        rightMax = Math.max(arr[j], rightMax);
        j--;
      } else {
        if (leftMax > arr[i]) {
          water += leftMax - arr[i];
        }
        leftMax = Math.max(arr[i], leftMax);
        i++;
      }
    }
    return water;
  }
}
