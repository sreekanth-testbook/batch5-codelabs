/**
 * Array from()
 * Array keys()
 */

let myArray = [20, 30, 40, 50, 60, 70, 80, 90, 100, 10];

const keys = myArray.keys();

for (const key of keys) {
  console.log(key);
}

const str = "Hello World!";
console.log(Array.from(str));
