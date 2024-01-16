//User function Template for javascript
/**
 * @param {number[][]} Intervals
 * @returns {number[][]}
 */

class Solution {
  //Function to Merge overlapping intervals.
  overlappedInterval(Intervals) {
    //your code here
    //[[1,10] , [4,6] , [7,9]]
    // Sort the intervals based on first element of each interval
    // store first interval in ele
    // start loop from 1 to n-1
    // check first element of current interval is less than second of ele then update
    // second of ele with max of second of ele and second of current interval
    //  if not push the element and update the ele with current interval
    Intervals.sort((a, b) => a[0] - b[0]);
    let ansArr = [],
      ele = Intervals[0];
    for (let i = 1; i < Intervals.length; i++) {
      if (ele[1] >= Intervals[i][0]) {
        ele[1] = Math.max(Intervals[i][1], ele[1]);
      } else {
        ansArr.push(ele);
        ele = Intervals[i];
      }
    }
    ansArr.push(ele);
    return ansArr;
  }
}
