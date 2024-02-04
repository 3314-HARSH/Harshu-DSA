/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
//  to solve this question, we will apply binaray search.
//  first, we need to define our search space for binary search,
//  1.Set the upper bound as the maximun element of the array
//  2.Set the lower bound as 1
//
//  Next, Implement `IsLessOrEqualToThreshold function`, this funcition will return true or false
//  based on whether the sum(the addition of all dividends where each element of nums
//  is divided by divisor, denoted as mid) is equal or less than the threshold.
//
//  while searching for the divisor value where`IsLessOrEqualToThreshold` returns true ,
//  store that value into a variable (track the minimum value), and
//  continue the search for lower values by decreasing maximun value with mid - 1
//  if `IsLessOrEqualToThreshold` returns false, the update you minimum with mid + 1

// Time O(logm * n) where m = maximun element of the array && n = number of element in an array
function IsLessOrEqualToThreshold(nums, divisor, threshold) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += Math.ceil(nums[i] / divisor);
  }
  return sum <= threshold;
}
var smallestDivisor = function (nums, threshold) {
  let min = 1;
  let max = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < nums.length; i++) {
    max = Math.max(nums[i], max);
  }
  let ans = Number.MAX_SAFE_INTEGER;
  while (min <= max) {
    let mid = Math.floor((min + max) / 2);
    let isEqualOrLess = IsLessOrEqualToThreshold(nums, mid, threshold);
    if (isEqualOrLess) {
      ans = Math.min(ans, mid);
      max = mid - 1;
    } else {
      min = mid + 1;
    }
  }
  return ans;
};
