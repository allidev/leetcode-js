const INF = 2147483647;
const GATE = 0;
const WALL = -1;

const directions = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

function bfs(rooms, row, col) {
  const m = rooms.length;
  const n = rooms[0].length;
  const queue = [];
  queue.push([row, col]);
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
        if (rooms[nextRow][nextCol] === GATE) {
          rooms[row][col] = dist;
          return;
        }
        queue.push([nextRow, nextCol]);
      }
    }
  }
}

export default function wallsAndGates(rooms) {
  // sequential scan to find all empty room
  // call bfs on each empty room
  for (let row = 0; row < rooms.length; row++) {
    for (let col = 0; col < rooms[0].length; col++) {
      if (rooms[row][col] === INF) {
        bfs(rooms, row, col);
      }
    }
  }
}
