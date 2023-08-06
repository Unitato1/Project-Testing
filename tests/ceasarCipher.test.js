import ceasarCipher from "../src/ceasarCipher";

test("Test Alphabet", () => {
  let result = true;
  let shift;
  for (let i = 0; i < 1500; i++) {
    shift = i % 26;
    if (
      ceasarCipher("a", i) !== String.fromCharCode(97 + shift) ||
      ceasarCipher("A", i) !== String.fromCharCode(65 + shift)
    ) {
      console.log(i);
      result = false;

      break;
    }
  }
  expect(result).toBe(true);
});
// console.log(String.fromCharCode(97)); "a"
// console.log("ada".charCodeAt(1)); "d"

test("The Only problem is end of things", () => {
  expect(ceasarCipher("z", 1)).toBe("a");
  expect(ceasarCipher("z", 2)).toBe("b");
  expect(ceasarCipher("z", 3)).toBe("c");
  expect(ceasarCipher("z", 4)).toBe("d");
});
test("Just don't do anything", () => {
  expect(ceasarCipher("a", 0)).toBe("a");
  expect(ceasarCipher("z", 0)).toBe("z");
  expect(ceasarCipher("Z", 0)).toBe("Z");
  expect(ceasarCipher("A", 0)).toBe("A");
});

test("sentence", () => {
  expect(ceasarCipher("abcd", 3)).toBe("defg");
  expect(
    ceasarCipher(
      "Hello this program  shoudl work ;'[;[ I hella like this stuif23141 Inkognito .?:><!{}",
      3
    )
  ).toBe(
    "Khoor wklv surjudp  vkrxgo zrun ;'[;[ L khood olnh wklv vwxli23141 Lqnrjqlwr .?:><!{}"
  );
});
