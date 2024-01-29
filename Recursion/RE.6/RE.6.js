/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  nums.sort((a, b) => a - b);
  function cloneSubsetsWithDup(nums, index, ansArr, tempArr) {
    if (index == nums.length) {
      return ansArr;
    }
    let curr = null;
    for (let i = index; i < nums.length; i++) {
      if (curr != nums[i]) {
        curr = nums[i];
        tempArr.push(nums[i]);
        ansArr.push([...tempArr]);
        console.log(i, tempArr);
        cloneSubsetsWithDup(nums, i + 1, ansArr, tempArr);
        tempArr.pop();
      }
    }

    return ansArr;
  }
  return cloneSubsetsWithDup(nums, 0, [[]], []);
};
