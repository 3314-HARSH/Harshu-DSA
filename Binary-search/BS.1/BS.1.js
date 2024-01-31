/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
// approach
// apply binary search
// first determine range of speed for our binary search
// min cap will be ceil of total sum divide by given hours
// max cap will be max element of array
// speed (mid) will determine how many hours koko will take to finish all bananas
// if hours is more than given hours then we will increase speed (min = mid + 1)
// else will decrease speed
// will keep track of max speed in given hours constraints (like 8 hours)

function hoursRequired(piles, speed) {
  let hours = 0;
  for (let i = 0; i < piles.length; i++) {
    hours += Math.ceil(piles[i] / speed);
  }
  return hours;
}
var minEatingSpeed = function (piles, h) {
  let sum = 0;
  let max = 0;
  for (let i = 0; i < piles.length; i++) {
    sum += piles[i];
    max = Math.max(max, piles[i]);
  }

  let min = Math.ceil(sum / h);
  let ans = Number.MAX_SAFE_INTEGER;
  console.log(min);
  while (min <= max) {
    let mid = Math.floor((min + max) / 2);
    let hours = hoursRequired(piles, mid);
    console.log(hours, mid);
    if (hours <= h) {
      ans = Math.min(ans, mid);
      max = mid - 1;
    } else min = mid + 1;
  }

  return ans;
};
