export function bfs(adjList) {
  const ans = [];
  const queue = [];
  const visited = {};
  queue.push(0);
  while (queue.length > 0) {
    const pos = queue.shift();
    visited[pos] = true;
    ans.push(pos);
    const edges = adjList[pos];
    for (const edge of edges) {
      if (visited[edge]) continue;
      queue.push(edge);
    }
  }
  return ans;
}
