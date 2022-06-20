

function sayHello() {
  let you = window.prompt(`What is your name?`);
  console.log(`Hi, my name is ${you}.`);
}
sayHello();

////////////////////////////////////////////////////////////////

let functionInVariable = function() {
  let newFunctionInVariable = `I am a function in variable.`;
  console.log(`Hello. ${newFunctionInVariable}`);
}
functionInVariable();

// Practise Exercise 6.1

let number1 = 10;
let number2 = 15;

function addTwoNumbers(num1, num2) {
  console.log(num1 + num2);
  console.log(num1 * num2);
}
addTwoNumbers(number1, number2);
addTwoNumbers(150, 150);

//////////////////////////////////////////////////////////////////

// Practise Exercise 6.2

let myArray = [`breakfest`, `job`, `walk`, `football`];

function askName() {
  let user = window.prompt(`What do you want to do?`);
  let random = Math.floor(Math.random() * 4);
  console.log(`I want to`, myArray[random]);
}
askName();

//////////////////////////////////////////////////////////////////

// Practise Exercise 6.3

let firstNumber = 10;
let secondNumber = 25;
let operatorNumber = `+`;

function myCalculator(firstNumber, secondNumber, operatorNumber) {
  switch (operatorNumber) {
      case `+`:
      return firstNumber + secondNumber;
      break;
      case `-`:
      return firstNumber - secondNumber;
      break;
      case `*`:
      return firstNumber * secondNumber;
      break;
      case `/`:
      return firstNumber / secondNumber;
      break;
  }
}
console.log(myCalculator(firstNumber, secondNumber,operatorNumber));
console.log(myCalculator(10, 25, `/`));
console.log(myCalculator(10, 25, `-`));
console.log(myCalculator(10, 25, `*`));

//////////////////////////////////////////////////////////////////////

function addTwoNumbers(x = 2, y =3) {
  console.log(x + y);
}
addTwoNumbers();
addTwoNumbers(6, 6);
addTwoNumbers(10);

//////////////////////////////////////////////////////////////////////

// Arrow Functions

function doingStuff(param) {
  console.log(param);
}
doingStuff(`this is great`);


let doingArrowStuff = param => console.log(param);
doingArrowStuff(`Arrow function`);

let addingTwoWord = param1 => console.log(param1);
addTwoNumbers(`Arrow functions `, 5);

/////////////////////////////////////////////////////////////////////

// Returning Fuction Values

function addTwoNumbers(x, y) {
  return x + y;
}
let result = addTwoNumbers(10,10);
console.log(result);

let resultsArr = [];

for (let i = 0; i < 21; i++) {
  let result = addTwoNumbers(i, 2*i);
  resultsArr.push(result);
}
console.log(resultsArr);

/////////////////////////////////////////////////////////////////////

// Practise Exercise 6.4

let emptyArr = [];
for (let i = 0; i < 10; i++) {
  
  
}