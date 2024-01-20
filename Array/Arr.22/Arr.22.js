/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */

//  function pow (x , n) {
//      if(n == 0) return 1
//      let result = (x * pow(x , n - 1))
//      return result;
//  }
var myPow = function (x, n) {
  // approach 1
  // let value = pow(x , Math.abs(n))

  // approach 2
  // let value = 1
  // for(let i = 0 ; i < Math.abs(n); i++){
  //     value*=x
  // }

  // if(n < 0){
  //     return (1/value)
  // }else return value

  // approach 3
  // let take an example
  // 2^10
  // n % 2 == 0 => (2*2)^5 , ans=1
  // n % 2 == 1 => 4 * 4^4, ans=4
  // n % 2 == 0 => (4*4)^2, ans=4
  // n % 2 == 0 => (16*16)^1, ans=4
  // n % 2 == 1 =>  256 * 256^0, ans=4 * 256 => 1024

  // In case of even power, do n/2 and increase x value by x*=x
  // In case of odd power, minimize power by 1 to make it even and update ans with multiply by x
  let flag = n < 0;
  n = Math.abs(n);
  let ans = 1;
  while (n > 0) {
    if (n % 2 == 0) {
      x *= x;
      n /= 2;
    } else {
      ans *= x;
      n -= 1;
    }
  }
  if (flag) return 1 / ans;
  else return ans;
};
