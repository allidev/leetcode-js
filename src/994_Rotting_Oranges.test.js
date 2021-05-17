import orangesRotting from "./994_Rotting_Oranges";

describe("leetcode: 994. Rotting Oranges", () => {
  it("should pass all test cases", () => {
    const grid = [
      [2, 1, 1],
      [1, 1, 0],
      [0, 1, 1],
    ];
    const res = orangesRotting(grid);
    expect(res).toEqual(4);
  });
});
