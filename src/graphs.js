export function bfs(adjList) {
  const visited = new Map();
  const ans = [];
  const queue = [];
  queue.push(0);
  visited.set(0, true);
  while (queue.length > 0) {
    const pos = queue.shift();
    ans.push(pos);
    const edges = adjList[pos];
    for (const edge of edges) {
      if (visited.get(edge)) continue;
      visited.set(edge, true);
      queue.push(edge);
    }
  }
  return ans;
}
