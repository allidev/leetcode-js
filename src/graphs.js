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
      if (!visited[edge]) queue.push(edge);
    }
  }
  return ans;
}

export function dfs(adjList, vertex, visited, values) {
  // base case
  if (visited[vertex]) return;
  // recursive case
  values.push(vertex);
  visited[vertex] = true;
  const edges = adjList[vertex];
  for (const edge of edges) {
    if (!visited[edge]) dfs(adjList, edge, visited, values);
  }
}
