import searchRange from "./34_Find_First_and_Last_Position_of_Element_in_Sorted_Array";
describe("leetcode 34", () => {
  it("should pass all test cases", () => {
    const ret = searchRange([5, 7, 7, 8, 8, 10], 8);
    expect(ret).toEqual([3, 4]);
  });
});
