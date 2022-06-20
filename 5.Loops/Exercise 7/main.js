
let simpleObject = {
  id: 1,
  type: `Ice cream`,
  description: `milk product`
}

for (const prop in simpleObject) {
  console.log(`Name of prop:` + prop + `value of prop:` + simpleObject[prop]);
}

let array = [];
for (const prop in simpleObject) {
  array.push(simpleObject[prop]);

}
console.log(Object.keys(simpleObject));
console.log(Object.values(simpleObject));
console.log(array);

for (let i = 0; i < 10; i++) {
  if (i === 4) {
    break;
  }

}
console.log(i);