import PI, { add, subtract, xyz as xyz1 } from "./math.js";

import { xyz as xyz2 } from "./math2.js";

console.log("this in module file", this);

const sum = add(100, 200);

const diff = subtract(1000, 500);

console.log("PI: ", PI);
console.log("Sum of 100 and 200: ", sum);
console.log("Difference of 1000 and 500: ", diff);

/**
 * 1. Code reuse
 * 2. Structuring code into multiple files
 * 3. To avoid namespace conflict
 */

console.log(xyz1, xyz2);
