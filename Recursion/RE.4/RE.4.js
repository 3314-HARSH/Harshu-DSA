/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  candidates.sort((a, b) => a - b);

  function cloneCombinationSum2(
    candidates,
    target,
    index,
    tempSum,
    tempArr,
    ansArr
  ) {
    if (tempSum == target) {
      ansArr.push([...tempArr]);
      return ansArr;
    }
    if (index == candidates.length) {
      return ansArr;
    }

    let curr = null;
    for (let i = index; i < candidates.length; i++) {
      if (curr != candidates[i]) {
        curr = candidates[i];
        let value = tempSum + candidates[i];
        let valueArr = [...tempArr];
        valueArr.push(candidates[i]);
        if (value <= target) {
          cloneCombinationSum2(
            candidates,
            target,
            i + 1,
            value,
            valueArr,
            ansArr
          );
        }
      }
    }

    return ansArr;
  }

  return cloneCombinationSum2(candidates, target, 0, 0, [], []);
};
