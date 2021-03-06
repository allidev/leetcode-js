const directions = [
  [-1, 0], // up
  [0, 1], // right
  [1, 0], // down
  [0, -1], // left
];

function dfs(matrix, row, col, seen, values) {
  // base case
  const rows = matrix.length;
  const cols = matrix[0].length;
  if (row < 0 || row >= rows) return;
  if (col < 0 || col >= cols) return;
  if (seen[row][col]) return;
  //recursive case: pre-order
  seen[row][col] = true;
  values.push(matrix[row][col]);
  for (const dir of directions) {
    const nextRow = row + dir[0];
    const nextCol = col + dir[1];
    dfs(matrix, nextRow, nextCol, seen, values);
  }
}

function bfs(matrix, seen, values, row, col) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const queue = [];
  queue.push([row, col]);
  while (queue.length > 0) {
    const [row, col] = queue.shift();
    if (row < 0 || row >= rows) continue;
    if (col < 0 || col >= cols) continue;
    if (seen[row][col]) continue;
    seen[row][col] = true;
    values.push(matrix[row][col]);
    for (const dir of directions) {
      queue.push([row + dir[0], col + dir[1]]);
    }
  }
}

function dfs_post_order(matrix, row, col, seen, values) {
  // base case
  const rows = matrix.length;
  const cols = matrix[0].length;
  if (row < 0 || row >= rows) return;
  if (col < 0 || col >= cols) return;
  if (seen[row][col]) return;
  //recursive case: pre-order
  seen[row][col] = true;
  for (const dir of directions) {
    const nextRow = row + dir[0];
    const nextCol = col + dir[1];
    dfs_post_order(matrix, nextRow, nextCol, seen, values);
  }
  values.push(matrix[row][col]);
}

export default function traversalDFS(matrix) {
  const seen = new Array(matrix.length)
    .fill(0)
    .map(() => new Array(matrix[0].length).fill(false));
  const values = [];
  dfs(matrix, 0, 0, seen, values);
  return values;
}

export function traversalDFSPO(matrix) {
  const seen = new Array(matrix.length)
    .fill(0)
    .map(() => new Array(matrix[0].length).fill(false));
  const values = [];
  dfs_post_order(matrix, 0, 0, seen, values);
  return values;
}

export function traversalBFS(matrix) {
  const seen = new Array(matrix.length)
    .fill(0)
    .map(() => new Array(matrix[0].length).fill(false));
  const values = [];
  bfs(matrix, seen, values, 2, 2);
  return values;
}
