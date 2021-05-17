import traversalDFS, { traversalDFSPO, traversalBFS } from "./2DArray";

describe("2D Array traversal", () => {
  const matrix = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
  ];
  it("should pass all test cases, dfs, pre-order", () => {
    const res = traversalDFS(matrix);
    const expected = [
      1, 2, 3, 4, 5, 10, 15, 20, 19, 14, 9, 8, 13, 18, 17, 12, 7, 6, 11, 16,
    ];
    expect(res).toEqual(expected);
  });
  it("should pass all test cases, dfs, post-order", () => {
    const res = traversalDFSPO(matrix);
    const expected = [
      16, 11, 6, 7, 12, 17, 18, 13, 8, 9, 14, 19, 20, 15, 10, 5, 4, 3, 2, 1,
    ];
    expect(res).toEqual(expected);
  });
  it("should pass all test cases, bfs", () => {
    const res = traversalBFS(matrix);
    const expected = [
      13, 8, 14, 18, 12, 3, 9, 7, 15, 19, 17, 11, 4, 2, 10, 6, 20, 16, 5, 1,
    ];
    expect(res).toEqual(expected);
  });
});
