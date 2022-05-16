
/*
let someValues1 = [1, 2, 3];
let someValues2 = [4, 5, 6];
let someValues3 = [7, 8, 9];

let multiDimArray = [someValues1, someValues2, someValues3];
console.log(multiDimArray[2][0]); */

let arr1 = [1, 2, 3];

let newArr1 = [arr1, arr1, arr1];
console.log(newArr1[1][1]);


// Object

let dog = {
  name: `Kuce`,
  weight: 3.4,
  color: `brown`,
  breed: `terrier`,
  age: 3,
  burglarBiter: true
};
let arrDog = [];
console.log(dog);
console.log(typeof arrDog);
console.log(`My dog name is ${dog.name}.. He weights ${dog.weight}`);
dog.name = `Jecky`;
console.log(`My dog name is ${dog.name}..He weights ${dog.weight}`);