/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  let n = s.length;
  let m = t.length;
  if (n != m) return false;
  let map = new Map();
  for (let i = 0; i < n; i++) {
    if (map.has(s[i])) {
      map.set(s[i], map.get(s[i]) + 1);
    } else map.set(s[i], 1);
  }
  for (let i = 0; i < m; i++) {
    if (map.has(t[i]) && map.get(t[i]) > 0) {
      map.set(t[i], map.get(t[i]) - 1);
    } else return false;
  }

  return true;
};
