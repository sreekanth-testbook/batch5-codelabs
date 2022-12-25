const PI = 22 / 7;

export const xyz = 1000;

//Single named export
export default PI;

// Multiple named export
export function add(x, y) {
  return x + y;
}

// Multiple named export
export function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

// Module -- export / import
