class Solution {
  /**
     * @param number n
     * @param number k
     * @param number[] arr
     
     * @returns number[]
     */
  printFirstNegativeInteger(n, k, arr) {
    // code here

    // here we are trying to find next min interger which is less than 0
    //In minArr we are storing index of next min interger
    // to achieve minArr, we are using stack;
    // we are pushing the element index if element is greater than or equal to 0
    // starts poping out if top element is less than current element and
    // current element is also less than 0
    //and popped element index, will help u to fill minArr corresponding to poped
    // element with value current index
    // and last whatever element is left inside the stack then popped it one by one
    // if popped element index and their value correspondind to it if it's less
    // than 0 , fill minArr index with that value only
    // if not assign max value
    //and last iterate over the main array if element is less than 0 and directly
    // push it into ansArr;
    // if not check nearest min value with help of minArr and also check that
    // index is that range or not if not push 0
    // time O(n) and space O(n)
    let stack = [];
    let minArr = new Array(n);
    let i = 0;
    while (i < n) {
      if (!stack.length) {
        stack.push(i);
        i++;
        continue;
      }
      while (arr[stack[stack.length - 1]] > arr[i] && arr[i] < 0) {
        let pi = stack.pop();
        minArr[pi] = i;
      }

      stack.push(i);
      i++;
    }
    while (stack.length) {
      let top = stack[stack.length - 1];
      stack.pop();
      if (arr[top] < 0) {
        minArr[top] = top;
      } else {
        minArr[top] = Math.MAX_SAFE_INTEGER;
      }
    }
    let ansArr = [];
    for (let i = 0; i <= n - k; i++) {
      if (arr[i] < 0) {
        ansArr.push(arr[i]);
      } else if (i + k > minArr[i]) {
        ansArr.push(arr[minArr[i]]);
      } else {
        ansArr.push(0);
      }
    }
    return ansArr;
    // time O(n*k) space O(k)
    //     let i = 0 , j = 0 , firstNegative = 0 , ansArr = []
    //     while(j < n){
    //         if(j < k){
    //             if(firstNegative == 0 && arr[j] < 0) firstNegative = arr[j]
    //             if(j == k - 1) ansArr.push(firstNegative)
    //             j++
    //         }else{
    //             if(firstNegative == arr[i]){
    //                 firstNegative = 0
    //                 let l = i+1
    //                 while(l <= j){
    //                     if(arr[l] < 0){
    //                         firstNegative = arr[l]
    //                         break;
    //                     }
    //                     l++
    //                 }
    //             }

    //             if(firstNegative == 0 && arr[j] < 0){
    //                     firstNegative = arr[j]
    //                 }
    //                 ansArr.push(firstNegative)
    //                 i++
    //                 j++
    //         }
    //     }
    //     return ansArr;
  }
}
