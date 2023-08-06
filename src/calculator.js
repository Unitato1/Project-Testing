export default (function calculator(a, b) {
  function add(a, b) {
    return a + b;
  }
  function subtract(a, b) {
    return a - b;
  }
  function divide(a, b) {
    return Math.floor(a / b);
  }
  function multiply(a, b) {
    return Math.floor(a * b);
  }
  return {
    add,
    subtract,
    divide,
    multiply,
  };
})();
