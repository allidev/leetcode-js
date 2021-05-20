function dfs(currentID, adjList, informTime) {
  if (adjList[currentID].length === 0) return 0;
  let ans = 0;
  for (let i = 0; i < adjList[currentID].length; i++) {
    const e = adjList[currentID][i];
    ans = Math.max(ans, dfs(e, adjList, informTime));
  }
  return ans + informTime[currentID];
}

function numOfMinutes(n, headID, manager, informTime) {
  const adjList = manager.map(() => []);
  for (let e = 0; e < n; e++) {
    const m = manager[e];
    if (m === -1) continue;
    adjList[m].push(e);
  }
  return dfs(headID, adjList, informTime);
}

numOfMinutes(6, 2, [2, 2, -1, 2, 2, 2], [0, 0, 1, 0, 0, 0]);
