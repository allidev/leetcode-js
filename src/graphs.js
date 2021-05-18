export function bfs(adjList) {
  const ans = [];
  const queue = [];
  const visited = new Map();
  queue.push(0);
  visited.set(0, true);
  while (queue.length > 0) {
    const pos = queue.shift();
    ans.push(pos);
    const edges = adjList[pos];
    for (const edge of edges) {
      if (visited.get(edge)) continue;
      queue.push(edge);
      visited.set(edge, true);
    }
  }
  return ans;
}
