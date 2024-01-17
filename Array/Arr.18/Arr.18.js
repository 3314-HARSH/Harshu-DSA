//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} low
 * @param {number} high
 */

class Solution {
  // find the pivot and kept it in their actual place
  partition(arr, low, high) {
    // Your code here
    let ri = Math.floor(Math.random() * (high - low + 1)) + low;
    let end = arr[high];
    arr[high] = arr[ri];
    arr[ri] = end;
    let i = low,
      j = high - 1;
    let pi = high; // help to dealing this case 1,3,5,7,9

    // while loop helps to find actual place of pivot (index) in the array
    while (i <= j) {
      if (arr[i] < arr[high]) {
        i++;
      } else {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        pi = j;
        j--;
      }
    }

    // assign the pivot into their place
    let temp = arr[pi];
    arr[pi] = arr[high];
    arr[high] = temp;

    return pi;
  }

  quickSort(arr, low, high) {
    //code here
    if (low < high) {
      let pi = this.partition(arr, low, high);
      this.quickSort(arr, low, pi - 1);
      this.quickSort(arr, pi + 1, high);
    }
    return arr;
  }
}
