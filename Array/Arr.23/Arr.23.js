//User function Template for javascript

/**
 * @param {number[]} price
 * @param {number} n
 * @returns {number[]}
 */
class Solution {
  //Function to calculate the span of stockâ€™s price for all n days.
  calculateSpan(price, n) {
    // code here
    let ansArr = [];
    for (let i = 0; i < n; i++) {
      let span = 1;
      let j = i - 1;
      while (j >= 0) {
        if (price[i] >= price[j]) {
          span += ansArr[j];
          j -= ansArr[j];
        } else {
          break;
        }
      }
      ansArr[i] = span;
    }

    return ansArr;
  }
}
