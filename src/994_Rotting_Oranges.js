const directions = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

const ROTTEN = 2;
const FRESH = 1;

function bfs(grid, startingPoints, count) {
  // edge case
  if (startingPoints.length === 0) return [0, count];
  let ans = -1; // starting from -1, since first item is already rotton
  const m = grid.length;
  const n = grid[0].length;
  const queue = [];
  for (const sp of startingPoints) {
    queue.push(sp);
  }
  while (queue.length > 0) {
    const size = queue.length;
    // processing one layer
    for (let i = 0; i < size; i++) {
      const [row, col] = queue.shift();
      for (const dir of directions) {
        const nextRow = row + dir[0];
        const nextCol = col + dir[1];
        if (nextRow < 0 || nextRow >= m) continue;
        if (nextCol < 0 || nextCol >= n) continue;
        if (grid[nextRow][nextCol] === FRESH) {
          queue.push([nextRow, nextCol]);
          // when we need to do in-place update, it should be done
          // when it is added to the queue
          grid[nextRow][nextCol] = ROTTEN;
          count--;
        }
      }
    }
    ans++;
  }
  return [ans, count];
}

export default function orangesRotting(grid) {
  let ans = 0;
  const rottingOranges = [];
  let count = 0;
  // sequential scan
  const m = grid.length;
  const n = grid[0].length;
  // first round: scan for rotton oranges (2)
  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      if (grid[row][col] === ROTTEN) {
        rottingOranges.push([row, col]);
      } else if (grid[row][col] === FRESH) {
        count++;
      }
    }
  }
  [ans, count] = bfs(grid, rottingOranges, count);
  // second round: scan for fresh oranges (1)
  return count === 0 ? ans : -1;
}
