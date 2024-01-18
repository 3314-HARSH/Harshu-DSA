//User function Template for javascript

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number[]} arr3
 * @param {number} n1
 * @param {number} n2
 * @param {number} n3
 * @returns {number}
 */

class Solution {
  commonElements(arr1, arr2, arr3, n1, n2, n3) {
    //code here
    let ansArr = [];
    let i = 0,
      j = 0,
      k = 0;
    while (i < n1 && j < n2 && k < n3) {
      if (arr1[i] == arr2[j] && arr2[j] == arr3[k]) {
        if (
          arr1[i - 1] != arr1[i] &&
          arr2[j - 1] != arr2[j] &&
          arr3[k - 1] != arr3[k]
        ) {
          ansArr.push(arr1[i]);
        }
        i++;
        j++;
        k++;
      }

      while (arr1[i] < arr2[j]) {
        i++;
      }

      while (arr2[j] < arr3[k]) {
        j++;
      }

      while (arr3[k] < arr1[i]) {
        k++;
      }
    }

    return ansArr;
  }
}
