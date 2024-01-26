/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  function cloneCombination(
    candidates,
    index,
    target,
    tempSum,
    tempArr,
    ansArr
  ) {
    if (tempSum == target) {
      ansArr.push([...tempArr]);
      return ansArr;
    }
    if (tempSum != target && index >= candidates.length) {
      return ansArr;
    }
    tempArr.push(candidates[index]);
    tempSum += candidates[index];
    if (tempSum <= target) {
      cloneCombination(candidates, index, target, tempSum, tempArr, ansArr);
    }

    tempArr.pop();
    tempSum -= candidates[index];
    cloneCombination(candidates, index + 1, target, tempSum, tempArr, ansArr);
    return ansArr;
  }

  return cloneCombination(candidates, 0, target, 0, [], []);
};
