function dfs(node, count) {
  // base case
  if (node === null) return count;
  // recursive case
  count++;
  return Math.max(dfs(node.left, count), dfs(node.right, count));
}

export default function maxDepth(root) {
  return dfs(root, 0);
}
