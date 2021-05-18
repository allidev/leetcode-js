import { bfs } from "./graphs";

describe("graphs", () => {
  it("should pass all test cases", () => {
    const adjList = [
      [1, 3],
      [0],
      [3, 8],
      [0, 4, 5, 2],
      [3, 6],
      [3],
      [4, 7],
      [6],
      [2],
    ];
    const res = bfs(adjList);
    expect(res).toEqual([0, 1, 3, 4, 5, 2, 6, 8, 7]);
  });
});
