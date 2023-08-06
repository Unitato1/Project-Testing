import sum from "../src/sum.js";

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("Large Number", () => {
  expect(sum(1000000, 2000000)).toBe(3000000);
});
