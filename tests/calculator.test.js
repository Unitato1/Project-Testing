import calculator from "../src/calculator";

// Tests for adding
test("Add with positive numbers", () => {
  expect(calculator.add(1, 4)).toBe(5);
});

test("Add with positive number and negative", () => {
  expect(calculator.add(1, -4)).toBe(-3);
});

test("Add with negative numbers", () => {
  expect(calculator.add(-1, -4)).toBe(-5);
});
// Tests for substracting
test("Subtract with positive numbers", () => {
  expect(calculator.subtract(1, 4)).toBe(-3);
});

test("Subtract with positive number and negative", () => {
  expect(calculator.subtract(1, -4)).toBe(5);
});

test("Subtract with negative numbers", () => {
  expect(calculator.subtract(-4, -1)).toBe(-3);
});

// Tests for dividing
test("Divide with positive numbers", () => {
  expect(calculator.divide(10, 5)).toBe(2);
});

test("Divide with positive number and negative", () => {
  expect(calculator.divide(4, -2)).toBe(-2);
});

test("Divide with negative numbers", () => {
  expect(calculator.divide(-4, -1)).toBe(4);
});

// Tests for multiplying
test("Multiply with positive numbers", () => {
  expect(calculator.multiply(2, 4)).toBe(8);
});

test("Multiply with positive number and negative", () => {
  expect(calculator.multiply(2, -4)).toBe(-8);
});

test("Multiply with negative numbers", () => {
  expect(calculator.multiply(-4, -2)).toBe(8);
});
