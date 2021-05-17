const directions = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

function bfs(grid, startingPoints) {
  // edge case
  if (startingPoints.length === 0) return 0;
  let ans = -1; // starting from -1, since first item is already rotton
  const m = grid.length;
  const n = grid[0].length;
  const queue = [];
  for (const sp of startingPoints) {
    const [row, col] = sp;
    queue.push(sp);
    grid[row][col] = 0;
  }
  while (queue.length > 0) {
    ans++;
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const [row, col] = queue.shift();
      for (const dir of directions) {
        const nextRow = row + dir[0];
        const nextCol = col + dir[1];
        if (nextRow < 0 || nextRow >= m) continue;
        if (nextCol < 0 || nextCol >= n) continue;
        if (grid[nextRow][nextCol] === 1) {
          queue.push([nextRow, nextCol]);
          grid[nextRow][nextCol] = 0;
        }
      }
    }
  }
  return ans;
}

export default function orangesRotting(grid) {
  let ans = 0;
  const rottingOranges = [];
  // sequential scan
  const m = grid.length;
  const n = grid[0].length;
  // first round: scan for rotton oranges (2)
  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      if (grid[row][col] === 2) {
        rottingOranges.push([row, col]);
      }
    }
  }
  ans = bfs(grid, rottingOranges);
  // second round: scan for fresh oranges (1)
  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      if (grid[row][col] === 1) return -1;
    }
  }
  return ans;
}
