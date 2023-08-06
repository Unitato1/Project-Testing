export default function analyzeArray(array) {
  let min = array.reduce(function (p, n) {
    return p < n ? p : n;
  });
  let max = array.reduce(function (p, n) {
    return p < n ? n : p;
  });
  let length = array.length;
  let average = Math.floor(
    array.reduce(function (p, n) {
      return p + n;
    }) / length
  );
  return { min, max, length, average };
}
