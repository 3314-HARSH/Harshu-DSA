if (!root) return [];
let data = new Map();
let less = 0;
let high = 0;
let queue = [{ position: 0, root }];

while (queue.length) {
  let size = queue.length;
  for (let i = 0; i < size; i++) {
    let pe = queue.shift();
    let ele = pe.root;
    let position = pe.position;
    data.set(position, ele.val);
    less = Math.min(less, position);
    high = Math.max(high, position);
    if (ele && ele.left) {
      queue.push({ position: position - 1, root: ele.left });
    }
    if (ele && ele.right) {
      queue.push({ position: position + 1, root: ele.right });
    }
  }
}
let ans = [];
for (let i = less; i <= high; i++) {
  if (data.has(i)) ans.push(data.get(i));
}
return ans;
