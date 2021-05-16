const directions = [
  [-1, 0], // up
  [0, 1], // right
  [1, 0], // down
  [0, -1], // left
];

function dfs(matrix, row, col, seen, values) {
  values.push(matrix[row][col]);
  seen[row][col] = true;
  const rows = matrix.length;
  const cols = matrix[0].length;
  for (const dir of directions) {
    const nextRow = row + dir[0];
    const nextCol = col + dir[1];
    if (nextRow < 0 || nextRow >= rows) continue;
    if (nextCol < 0 || nextCol >= cols) continue;
    if (seen[nextRow][nextCol]) continue;
    dfs(matrix, nextRow, nextCol, seen, values);
  }
}

export default function traversalDFS(matrix) {
  const seen = new Array(matrix.length)
    .fill(0)
    .map(() => new Array(matrix[0].length).fill(false));
  const values = [];
  dfs(matrix, 0, 0, seen, values);
  return values;
}
