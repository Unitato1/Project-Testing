import capitalize from "../src/capitalize.js";

test("One word sentence", () => {
  expect(capitalize("word")).toMatch("Word");
});
test("No word sentence", () => {
  expect(capitalize("")).toMatch("");
});

test("Sentence", () => {
  expect(capitalize("words are art.")).toMatch("Words are art.");
});

test("Really long sentence", () => {
  expect(
    capitalize(
      "words are art which many people use unwisely, this leads to empty words."
    )
  ).toMatch(
    "Words are art which many people use unwisely, this leads to empty words."
  );
});
