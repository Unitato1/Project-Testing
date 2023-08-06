export default function ceasarCipher(sentence, shift) {
  let result = "";
  let code = 0;
  for (let i = 0; i < sentence.length; i++) {
    code = sentence[i].charCodeAt();
    shift %= 26;
    if (
      (code > 90 && code < 97) ||
      !(sentence[i].toLowerCase() !== sentence[i].toUpperCase())
    ) {
      result += sentence[i];
      continue;
    }
    if (code + shift > 90 && !code > 97) {
      result += String.fromCharCode(64 + shift);
      continue;
    } else if (code + shift > 122) {
      result += String.fromCharCode(96 + shift);
      continue;
    } else {
      result += String.fromCharCode(code + shift);
    }
  }
  return result;
}
// console.log(String.fromCharCode(97)); "a"
// console.log("ada".charCodeAt(1)); "d"
