
// A variable is a container for storing data
// A variable behave as if it was the value that it containes

// Two steps:
// 1.Declaration (let, const)
// 2.Assignment (= assigment operator)

let firstName = `Iljo`; // string
let myAge = 36; // number
let student = true // boolean

console.log(`Hello`, firstName);
console.log(`You are`, myAge, `years old`);
console.log(`Enrolled:`, student);

document.getElementById(`p1`).innerHTML = `Hello ` + firstName;
document.getElementById(`p2`).innerHTML = `You are ` + myAge + ` years old`;
document.getElementById(`p3`).innerHTML = `Enrolled: ` + student;

///////////////////////////////////////////////////////////

/*
  arithmetic expression is a combination of ...
  operand (values, variables, ect.)
  operators (+ - * / %)
  that can be evaluated to a value
  ex. y = x + 5;
*/

let students = 20;
//students += 1;
//students -= 1;
//students *= 2;
//students /= 2
let extraStudents = students % 3;
console.log(extraStudents);

//////////////////////////////////////////////////////////

// How to accept user input
// Easy way with a window prompt
let userName = window.prompt(`What is your name?`);
console.log(userName);

// Difficult way HTML textbox
let username;
document.getElementById(`myButton`).onclick = function () {

  username = document.getElementById(`myText`).value;
  console.log(username);
  document.getElementById(`myLabel`).innerHTML = username;
}

/////////////////////////////////////////////////////////

// Type Conversion = change the datatype of a value to another
//   (string,numbers,boolean)

let age = window.prompt(`How old are you?`);
console.log(typeof age);
age = Number(age);
age++;
console.log(typeof age);
console.log(`Happy birthday!You are`, age, `years old`);

let x;
let y;
let z;

x = Number(`3.12`);
y = String(3.12);
z = Boolean(`pizza`);

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);

/////////////////////////////////////////////////////////

// const = a variable that can't be change

const pi = 3.14;
let radius;
let circumference;

radius = window.prompt(`Enter the radius of a circle`);
radius = Number(radius);

circumference = 2 * pi * radius;

console.log(`The circumfence is:`, circumference);

/////////////////////////////////////////////////////////

// Math

let num1 = 3.14

//num1 = Math.round(num1);
//num1 = Math.floor(num1);
//num1 = Math.ceil(num1);
//num1 = Math.pow(num1);

console.log(num1);