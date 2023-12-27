//User function Template for javascript

/**
 * @param {number[]} a
 * @param {number} size
 * @returns {number}
 */

class Solution {
  majorityElement(a, size) {
    //your code here
    let ele = a[0],
      life = 1;
    for (let i = 1; i < size; i++) {
      if (life == 0) {
        (ele = a[i]), life++;
      } else if (ele == a[i]) life++;
      else life--;
    }
    let count = 0;
    for (let i = 0; i < size; i++) {
      if (ele == a[i]) count++;
    }

    if (count > Math.floor(size / 2)) return ele;
    else return -1;
  }
}
