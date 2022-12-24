/**object.keys(),
 * object.values(), and object.entries() */

const obj = {
  a: 100,
  b: 200,
  c: 300,
  d: 400,
  e: 500,
};

console.log(Object.keys(obj)); // [a,b,c,d,e]
console.log(Object.values(obj)); // [100,200,300,400,500]
console.log(Object.entries(obj)); // [[a,100],[b,200],[c,300],[d,400],[e,500]]
