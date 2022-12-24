//Rest Parameter

/*
function add(x, y) {
  const z = x + y;

  console.log(z);
}*/

function add(...rest) {
  let z = 0;
  console.log(rest);

  for (let index = 0; index < rest.length; index++) {
    const element = rest[index];

    z = z + element;
  }

  console.log(z);
}

// add(10, 20);

add(10, 20, 30, 40, 50);
