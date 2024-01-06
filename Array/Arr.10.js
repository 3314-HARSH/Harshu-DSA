/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  let stack = [];
  let ansArr = [];
  let i = 0;
  while (i < temperatures.length) {
    if (!stack.length) {
      stack.push(i);
      i++;
      continue;
    }
    while (temperatures[stack[stack.length - 1]] < temperatures[i]) {
      let pi = stack.pop();
      ansArr[pi] = i - pi;
    }
    stack.push(i);
    i++;
  }

  while (stack.length) {
    let pi = stack.pop();
    ansArr[pi] = 0;
  }
  return ansArr;
};
