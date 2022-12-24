//Destructuring syntax

const testArray = [10, 20, 30, 40, 50];

/*
const a = testArray[0];
const b = testArray[1];
*/

const [a, b, , , , c] = testArray;

console.log(a, b, c); //output: 10,20,undefined

//------------------------------------

const testObject = {
  x: 100,
  y: 200,
  z: 300,
};

/*
const x = testObject.x;
const z = testObject.y;
*/

const { x, z, something } = testObject;

console.log(x, z, something); //output: 100,200, undefined
