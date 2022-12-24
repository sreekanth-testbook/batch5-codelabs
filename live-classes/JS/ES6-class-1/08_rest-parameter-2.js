//Rest Parameter

function test(a, b, ...x) {
  console.log("a", a);
  console.log("b", b);

  console.log("rest: ", x);
}

test(1, 2, 3, 4, 5);
