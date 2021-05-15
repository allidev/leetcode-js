import sumToTarget from "./sum-to-target";

// 1 + Recursive(3) ===>
//   1 + Recursive(3)[0]
//   1 + Recursive(3)[1]
//   1 + Recursive(3)[2]
//   1 + Recursive(3)[3]
// 2 + Recursive(2)
// 3 + Recursive(1)
// 4 + Recursive(0)

describe("Sum to target", () => {
  it("should pass the test", () => {
    const expected = [
      "1+1+1+1",
      "1+1+2",
      "1+2+1",
      "1+3",
      "2+1+1",
      "2+2",
      "3+1",
    ];
    const ret = sumToTarget(4);
    expect(ret).toEqual(expected);
  });
});
