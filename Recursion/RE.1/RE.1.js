/**
 * @param {number[]} nums
 * @return {number[][]}
 */
//
function cloneSubsets(index, nums, subset, tempSet) {
  if (nums.length == index) {
    subset.push([...tempSet]);
    return subset;
  }
  // take it
  tempSet.push(nums[index]);
  cloneSubsets(index + 1, nums, subset, tempSet);

  // not take it
  tempSet.pop();
  cloneSubsets(index + 1, nums, subset, tempSet);

  return subset;
}
var subsets = function (nums) {
  return cloneSubsets(0, nums, [], []);
};
