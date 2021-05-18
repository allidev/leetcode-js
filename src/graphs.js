export function bfs(adjList) {
  const ans = [];
  const queue = [];
  const visited = {};
  queue.push(0);
  visited[0] = true;
  while (queue.length > 0) {
    const pos = queue.shift();
    ans.push(pos);
    const edges = adjList[pos];
    for (const edge of edges) {
      if (visited[edge]) continue;
      queue.push(edge);
      visited[edge] = true;
    }
  }
  return ans;
}
