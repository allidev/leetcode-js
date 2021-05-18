import { bfs } from "./graphs";

describe("graphs", () => {
  it("should pass all test cases", () => {
    const adjList = [
      [1, 3],
      [0],
      [3, 8],
      [0, 2, 4, 5],
      [3, 6],
      [3],
      [4, 7],
      [6],
      [2],
    ];
    const res = bfs(adjList);
    expect(res).toEqual([0, 1, 3, 2, 4, 5, 8, 6, 7]);
  });
});
