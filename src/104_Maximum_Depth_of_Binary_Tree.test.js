import maxDepth from "./104_Maximum_Depth_of_Binary_Tree";

describe("leetcode: 104. Maximum Depth of Binary Tree", () => {
  it("should pass all test cases", () => {
    const ret = maxDepth(null);
    expect(ret).toEqual(0);
  });
});
