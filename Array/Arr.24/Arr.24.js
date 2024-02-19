/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let i = 0,
    j = 0,
    len = nums.length;
  while (i < len && j < len) {
    if (nums[j] == 0) {
      j++;
    } else {
      let temp = nums[j];
      nums[j] = nums[i];
      nums[i] = temp;
      i++;
      j++;
    }
  }
};
