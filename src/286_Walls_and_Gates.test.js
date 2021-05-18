import wallsAndGates from "./286_Walls_and_Gates";

describe("leetcode: 286. Walls and Gates", () => {
  it("should pass all test cases", () => {
    const rooms = [
      [2147483647, -1, 0, 2147483647],
      [2147483647, 2147483647, 2147483647, -1],
      [2147483647, -1, 2147483647, -1],
      [0, -1, 2147483647, 2147483647],
    ];
    const expected = [
      [3, -1, 0, 1],
      [2, 2, 1, -1],
      [1, -1, 2, -1],
      [0, -1, 3, 4],
    ];
    wallsAndGates(rooms);
    expect(rooms).toEqual(expected);
  });
});
