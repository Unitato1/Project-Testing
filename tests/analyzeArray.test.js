import analyzeArray from "../src/analyzeArray";

test("Basic test", () => {
  let testCase = analyzeArray([1, 8, 3, 4, 2, 6]);
  expect(testCase.min).toBe(1);
  expect(testCase.max).toBe(8);
  expect(testCase.length).toBe(6);
  expect(testCase.average).toBe(4);
});
