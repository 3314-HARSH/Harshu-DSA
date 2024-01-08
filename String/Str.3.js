//User function Template for javascript

/**
 * @param {string} S
 * @return {number}
 */

class Solution {
  isPalindrome(S) {
    //code here
    // two pointer approach
    // check ith and jth element are equal or not
    let i = 0,
      j = S.length - 1;
    while (i < j) {
      if (S[i] != S[j]) {
        return 0;
      }
      i++;
      j--;
    }
    return 1;
  }
}
