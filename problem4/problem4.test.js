const findMaxSumSubArray = require("./problem4");

test("Test 1", () => {
  expect(findMaxSumSubArray(3, [2, 1, 5, 1, 3, 2])).toEqual(9);
});
test("Test 2", () => {
  expect(findMaxSumSubArray(2, [2, 3, 4, 1, 5])).toEqual(7);
});
test("Test 3", () => {
  expect(findMaxSumSubArray(2, [2, 1, 4, 1, 1])).toEqual(5);
});
test("Test 4", () => {
  expect(findMaxSumSubArray(3, [2, 1, 4, 1, 1])).toEqual(7);
});
test("Test 5", () => {
  expect(findMaxSumSubArray(4, [2, 1, 4, 1, 1])).toEqual(8);
});
