//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} N
 * @returns {number}
 */

class Solution {
  // Function to count inversions in the array.

  // approach
  //for solving this problem merge sort algo is helpful
  //while merging two sorted array that time you need to count inversion
  // example let's left Arr [1,4,7] ,  right arr [2 ,3] , temp arr = [] , count = 0
  // merging time; i => 1, j => 2
  // if left is less than right then simply insert into temp arr; => now temp arr [1]
  // now i => 4 , this is left is greater than right then at that time increase count by
  // lenght of left arr - i + 1, bz if ith ele is greater than jth ele, it means all element next to
  //ith element will greater(array is sorted), then whatever element is next to ith element
  //and itself are able to make pair that's why count increased by lenght of left arr - i + 1

  merger(arr, mid, l, r) {
    let mergeArr = [];
    let i = l,
      j = mid + 1,
      count = 0,
      pair = mid - l + 1;
    while (i <= mid && j <= r) {
      if (arr[i] > arr[j]) {
        mergeArr.push(arr[j]);
        j++;
        count += pair;
      } else {
        mergeArr.push(arr[i]);
        pair--;
        i++;
      }
    }

    while (i <= mid) {
      mergeArr.push(arr[i]);
      i++;
    }
    while (j <= r) {
      mergeArr.push(arr[j]);
      j++;
    }

    for (let i = l; i <= r; i++) {
      arr[i] = mergeArr[i - l];
    }
    return count;
  }
  mergeAlgo(arr, l, r) {
    let count = 0;
    if (l < r) {
      let mid = Math.floor((l + r) / 2);
      count += this.mergeAlgo(arr, l, mid);
      count += this.mergeAlgo(arr, mid + 1, r);

      count += this.merger(arr, mid, l, r);
      return count;
    } else {
      return count;
    }
  }
  inversionCount(arr, N) {
    //your code here
    return this.mergeAlgo(arr, 0, N - 1, 0);
  }
}
