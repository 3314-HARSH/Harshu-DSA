//User function Template for javascript

/**
 * @param {number[][]} matrix
 * @param {number} N
 * @param {number} M
 * @param {number} X
 * @returns {number}
 */
class Solution {
  matSearch(matrix, N, M, X) {
    // code here
    // time O(nlogm)
    // interating through row and checking if that row's last element is greater
    // than it's possibilty to find the target and finding element into that row
    // using binary search bz are rows are sorted

    // for(let i = 0; i<N; i++){
    //     if(matrix[i][M-1] >= X){
    //         let j = 0 , k = M-1
    //         while(j<=k){
    //             let mid = Math.floor((j+k)/2)
    //             if(matrix[i][mid] == X){
    //                 return 1
    //             }else if (matrix[i][mid] < X){
    //                 j = mid + 1
    //             }else{
    //                 k = mid - 1
    //             }
    //         }
    //     }

    // }
    // return 0;

    // time O(n+m)
    // You can start interation from left-bottom or right-top bz
    // only this two way we will get sorted array
    // if your target is greater than curr element than you can eliminate column
    // and move to the next column
    // if you target is less than curr element than you can eliminate row and move
    // to next row
    let i = N - 1,
      j = 0;
    while (i >= 0 && j < M) {
      if (matrix[i][j] == X) {
        return 1;
      } else if (matrix[i][j] < X) {
        j++;
      } else {
        i--;
      }
    }
    return 0;
  }
}
