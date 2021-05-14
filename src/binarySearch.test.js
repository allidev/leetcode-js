import binarySearch from "./binarySearch";

describe("binary search", () => {
    it("should pass all test cases", () => {
        const ret = binarySearch([1,2,3,4], 3);
        expect(ret).toEqual(2);
    });
});