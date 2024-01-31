/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
// first establish the range of bloomy days
// set the min cap as the min element of bloomyDay
// set the max cap as the max element of bloomyDay
// apply binary search within this range
// During each iteration of the binary search
// find out how many bouquets you can make on that particular day
//(example within a span of 9 days)
// if you are able to make all the bouquets on that specific day
// then store the result and decrease your day count
// ur day count
// if not increase your day count
function IsSufficientDays(bloomDay, m, k, days) {
  let prev = -1;
  let count = 0;
  for (let i = 0; i < bloomDay.length; i++) {
    if (bloomDay[i] <= days) {
      if (prev == i - 1) {
        count++;
      } else count = 1;

      if (count == k) {
        m--;
        count = 0;
      }
      prev = i;
    }
  }

  if (m <= 0) return true;
  else return false;
}
var minDays = function (bloomDay, m, k) {
  let n = bloomDay.length;
  if (n < m * k) return -1;

  let min = Number.MAX_SAFE_INTEGER;
  let max = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < n; i++) {
    min = Math.min(min, bloomDay[i]);
    max = Math.max(max, bloomDay[i]);
  }

  let result = Number.MAX_SAFE_INTEGER;
  while (min <= max) {
    let mid = Math.floor((min + max) / 2);
    let canMake = IsSufficientDays(bloomDay, m, k, mid);
    if (canMake) {
      result = Math.min(result, mid);
      max = mid - 1;
    } else min = mid + 1;
  }

  return result;
};
