//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @param {number} k
 * @returns {number[]}
 */
class Solution {
  //Function to find maximum of each subarray of size k.
  max_of_subarrays(arr, n, k) {
    // code here

    // logic
    // first initialized max val with min value
    // in first phase, try to find out max value of first window(0 -> k)
    // and push it into ans array
    //  in second phase loop will go form 1 to n - k;
    //  inside loop if excluding element is equal to max
    // then we will again, try to calculate max value for window [i -> i+k-1]
    // if excluding element is not equal to max then we will check upcoming
    // element is greate than or equal to max, if it is, we will assign max
    // value to upcoming value and push it into arr
    // if upcoming element is less than max then we will directly push max
    // value into array
    //
    //---------------------------------------------------------
    //
    // let max = Number.MIN_SAFE_INTEGER
    // for(let i = 0 ; i < k ; i++){
    //     max = Math.max(max , arr[i])
    // }
    // let ans = [max]
    // for(let i = 1 ; i <= n - k; i++){
    //     if(arr[i-1] == max){
    //         max =  Number.MIN_SAFE_INTEGER
    //         for(let j = i ; j < i+k ; j++){
    //             max = Math.max(max , arr[j])
    //         }
    //     }
    //     if(arr[k+i-1] >= max){
    //         max = arr[k+i-1]
    //         ans.push(max)
    //     }else{
    //         ans.push(max)
    //     }
    // }
    // return ans;
    //
    //-----------------------------------------------------------
    //
    // second approach
    // 1.First k is having value = 1 then return arr itself
    // 2.this approach is based on find the next greatest interger
    // 3.initialzed a stack(staring index) ,
    //nextGreaterIdxArr (which is generally store the index
    // of next greatest interger corresponding to arr poped index)
    // and i = 0
    // 4.loop will go from (i to n - 1)
    // 5.if stack is empty then push the index into stack and continue
    // 6.arr[i] element is greater than stack top element then start poping
    // out the element until stack top is greater than arr[i]
    // and poped out indices help to fill the nextGreaterIdxArr with the value i(current Index)
    // then push the ith index
    // 7.if the stack is not empty then poped out element until stack is empty
    // and again poped out indices help to fill the nextGreaterIdxArr with the
    // value (Number.MAX_SAFE_INTEGE)

    //Now initialized ansArr = [] (which stores maximum of all subarrays of size k)
    // l and m , l will loop through arr and j will loop through nextGreaterIdxArr
    // both pointer will start from 0, l will go upto n - k and j will go upto n
    // if l is at 0 then m pointer will move if nextGreaterIdxArr[m] and
    // nextGreaterIdxArr[m+1] is less than range(i + k)
    // and push the element for ith position
    // edge case: if nextGreaterIdxArr[j] is greater than range then push that element
    // only
    // if m is less than l then make the equal to l

    if (k == 1) return arr;
    let stack = [],
      nextGreaterIdxArr = new Array(),
      i = 0;
    while (i < n) {
      if (!stack.length) {
        stack.push(i);
        i++;
        continue;
      }
      while (arr[stack[stack.length - 1]] < arr[i]) {
        let popEle = stack.pop();
        nextGreaterIdxArr[popEle] = i;
      }
      stack.push(i);
      i++;
    }
    while (stack.length) {
      nextGreaterIdxArr[stack[stack.length - 1]] = Number.MAX_SAFE_INTEGER;
      stack.pop();
    }

    let ansArr = [],
      l = 0,
      m = 0;
    while (l <= n - k) {
      if (l > m) m = l;
      while (nextGreaterIdxArr[m] < l + k && nextGreaterIdxArr[m + 1] < l + k) {
        m++;
      }
      if (nextGreaterIdxArr[m] >= l + k) {
        ansArr.push(arr[l]);
      } else ansArr.push(arr[nextGreaterIdxArr[m]]);
      l++;
    }
    return ansArr;
  }
}
