/**Array find()
Array findIndex() */

let myArray = [20, 30, 40, 50, 60, 70, 80, 90, 100, 10];

// Returns the value if found. Otherwise returns undefined
const exists = myArray.find((x) => {
  return x === 40;
});

// Returns the array index if value is found. Otherwise returns -1
const index = myArray.findIndex((y) => {
  return y === 101;
});

console.log(exists, index);
