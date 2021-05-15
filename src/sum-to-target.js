function recursive(N, shouldInclude) {
  // base case
  if (N === 0) {
    return [];
  }
  // recursive case
  const ans = [];
  for (let i = 1; i <= N; i++) {
    const temp = recursive(N - i, true);
    const size = temp.length;
    if (size > 0) {
      for (let j = 0; j < size; j++) {
        ans.push("" + i + "+" + temp[j]);
      }
    } else if (shouldInclude) {
      ans.push("" + i);
    }
  }
  return ans;
}

export default function sumToTarget(N) {
  return recursive(N, false);
}
