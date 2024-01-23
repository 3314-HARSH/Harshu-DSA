/**
 * @param {number} n
 * @return {number}
 */
// note
// depends on combination
// even indices how many ways you can fill [5 ways] [0, 2, 4, 6, 8]
// odd indices we can fill in 4 ways [2, 3, 5, 7]

function pow(base, power) {
  let ans = 1n;
  while (power > 0) {
    if (power % 2n == 0n) {
      base *= base;
      power /= 2n;
    } else {
      ans *= base;
      power -= 1n;
    }

    base %= BigInt(10 ** 9 + 7);
    ans %= BigInt(10 ** 9 + 7);
  }

  return ans;
}
var countGoodNumbers = function (n) {
  // time O(n)
  //     let count = 1
  //    for(let i = 0 ; i < n; i++){
  //        if(i%2 == 0){
  //            count*=5
  //        }else count*=4

  //        count = count%(10**9 + 7)
  //    }

  //    return count

  // time O(logn)
  n = BigInt(n);
  let odd = n % 2n != 0;
  console.log(odd);
  let power = n / 2n;
  let output = pow(5n, odd ? power + 1n : power) * pow(4n, power);
  return Number(output % BigInt(10 ** 9 + 7));
};
