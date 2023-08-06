import reverseString from "../src/reverseString.js";

test("Basic test", () => {
  expect(reverseString("robo")).toMatch("obor");
});
test("already reversed", () => {
  expect(reverseString("cabac")).toMatch("cabac");
});

test("already reversed 1 upper case", () => {
  expect(reverseString("caBac")).toMatch("caBac");
});

test("1 upper case not middle", () => {
  expect(reverseString("cabaC")).toMatch("Cabac");
});
