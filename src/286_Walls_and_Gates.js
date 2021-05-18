const INF = 2147483647;
const GATE = 0;
const WALL = -1;

const directions = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

function bfs(rooms, gates) {
  const m = rooms.length;
  const n = rooms[0].length;
  const queue = [];
  for (const gate of gates) {
    const [row, col] = gate;
    queue.push([row, col]);
  }
  let dist = 0;
  while (queue.length > 0) {
    dist++;
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const [crow, ccol] = queue.shift();
      for (const dir of directions) {
        const nextRow = crow + dir[0];
        const nextCol = ccol + dir[1];
        if (nextRow < 0 || nextRow >= m) continue;
        if (nextCol < 0 || nextCol >= n) continue;
        if (rooms[nextRow][nextCol] === WALL) continue;
        if (rooms[nextRow][nextCol] === INF) {
          rooms[nextRow][nextCol] = dist;
          queue.push([nextRow, nextCol]);
        }
      }
    }
  }
}

export default function wallsAndGates(rooms) {
  // sequential scan to find all gates
  // call bfs on simultaneously
  const gates = [];
  for (let row = 0; row < rooms.length; row++) {
    for (let col = 0; col < rooms[0].length; col++) {
      if (rooms[row][col] === GATE) {
        gates.push([row, col]);
      }
    }
  }
  bfs(rooms, gates);
}

function dfs(rooms, row, col, dist) {
  dist++;
  for (const dir of directions) {
    const nextRow = row + dir[0];
    const nextCol = col + dir[1];
    if (nextRow < 0 || nextRow >= rooms.length) continue;
    if (nextCol < 0 || nextCol >= rooms[0].length) continue;
    if (rooms[nextRow][nextCol] > rooms[row][col]) {
      rooms[nextRow][nextCol] = dist;
      dfs(rooms, nextRow, nextCol, dist);
    }
  }
}

function dfsAlt(rooms, row, col, dist) {
  if (row < 0 || row >= rooms.length) return;
  if (col < 0 || col >= rooms[0].length) return;
  if (dist > rooms[row][col]) return;
  rooms[row][col] = dist;
  for (const dir of directions) {
    dfsAlt(rooms, row + dir[0], col + dir[1], dist + 1);
  }
}

export function wallsAndGatesDFS(rooms) {
  for (let row = 0; row < rooms.length; row++) {
    for (let col = 0; col < rooms[0].length; col++) {
      if (rooms[row][col] === GATE) {
        dfs(rooms, row, col, 0);
      }
    }
  }
}

export function wallsAndGatesDFSAlt(rooms) {
  for (let row = 0; row < rooms.length; row++) {
    for (let col = 0; col < rooms[0].length; col++) {
      if (rooms[row][col] === GATE) {
        dfsAlt(rooms, row, col, 0);
      }
    }
  }
}
