//User function Template for javascript

/**
 * @param {string} s
 * @return {number}
 */

class Solution {
  findSubString(s) {
    //code here
    //   cAcCCbBCCbAA , CCCbAbbBbbC
    // first count unique element in given string using set
    // start adding element inside map until your count reaches to equel size of uniqueElement
    // and consider like one window if your count is equal to size
    // start shrinking down the window from the left side by moving k pointer
    // while shrinking calculate the min size of window
    // shrinking process will be happen untill count becomes less than size of uniqueElement
    let uniqueData = new Set();
    let n = s.length;
    for (let i = 0; i < n; i++) {
      uniqueData.add(s[i]);
    }

    let size = uniqueData.size;
    let k = 0;
    let data = new Map();
    let count = 0;
    let windowSize = s.length;
    for (let i = 0; i < n; i++) {
      if (data.has(s[i])) {
        data.set(s[i], data.get(s[i]) + 1);
      } else {
        count++;
        data.set(s[i], 1);
      }

      while (count == size) {
        windowSize = Math.min(i - k + 1, windowSize);
        if (data.get(s[k]) == 1) {
          data.delete(s[k]);
          count--;
        } else {
          data.set(s[k], data.get(s[k]) - 1);
        }

        k++;
      }
    }
    return windowSize;
  }
}
