// Enhanced object literal
const arrayOne = [1, 2, 3];

const arrayTwo = [4, 5, 6];

const arrayThree = [100, ...arrayOne, 200, ...arrayTwo];

console.log(arrayThree);

//--------------------------------

const objectOne = {
  x: 100,
  y: 200,
  z: 300,
  firstName: "Kuldeep",
};

const objectTwo = {
  firstName: "Virat",
  lastName: "Kohli",
};

const ObjectThree = {
  ...objectTwo,
  ...objectOne,
  lastName: "Patel",
  p: 1,
  q: 2,
  r: 3,
};

console.log(ObjectThree);
