import traversalDFS from "./2DArray";

describe("2D Array traversal", () => {
  it("should pass all test cases", () => {
    const matrix = [
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10],
      [11, 12, 13, 14, 15],
      [16, 17, 18, 19, 20],
    ];
    const res = traversalDFS(matrix);
    const expected = [
      1, 2, 3, 4, 5, 10, 15, 20, 19, 14, 9, 8, 13, 18, 17, 12, 7, 6, 11, 16,
    ];
    expect(res).toEqual(expected);
  });
});
