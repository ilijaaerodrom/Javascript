

let counter = 0;
let step = 13;
let i = 0;

do {
  //counter = counter + step;
  counter += step;
  console.log(`The counter is ` + counter + `| The number of do loops is:` + ++i);
} while (counter < 100);
