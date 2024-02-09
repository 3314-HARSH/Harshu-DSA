/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
//  This problem is based on binaray search
//  1.This time, our search space / range will be the capacity of the ship
//  2. Set the minimum Capacity as the maximum weight of the array why?
//  Because if our ship'capacity is less than the maximun weight of the array, it won't be able to ship those big packages.
//  3. Set Maximum Capacity as the sum of all weight of the array why?
//  because this means now there is a possibility to ship all packages in a day.
//  4.Initialize the `AbleToship` function that will return true or false
//  based on the given capacity and whether the packages can be shipped within the given days.
//  5. while perfoming binaray search on capacity range of the ship,
//  6. Each time, call the `AbleToship` function with the arguments
// (weights , days and mid denotes capacity).
//  if `AbleToship` returns true, store that mid value (denoting capacity) in a variable that keeps track of min capacity value
//  and decrease maximum (denoting upper cap of capacity) by mid - 1
//  if AbleToship returns false, increase min by mid+1
function ableToship(weights, days, capacity) {
  let sum = 0;
  for (let i = 0; i < weights.length; i++) {
    sum += weights[i];
    if (sum > capacity) {
      sum = weights[i];
      days--;
    }
    if (i == weights.length - 1) {
      days--;
    }
  }
  return days >= 0;
}
var shipWithinDays = function (weights, days) {
  let min = Number.MIN_SAFE_INTEGER;
  let max = 0;
  for (let i = 0; i < weights.length; i++) {
    min = Math.max(weights[i], min);
    max += weights[i];
  }
  let leastCapacity = Number.MAX_SAFE_INTEGER;

  while (min <= max) {
    let mid = Math.floor((min + max) / 2);
    let isAble = ableToship(weights, days, mid);
    if (isAble) {
      leastCapacity = Math.min(leastCapacity, mid);
      max = mid - 1;
    } else {
      min = mid + 1;
    }
  }
  return leastCapacity;
};
