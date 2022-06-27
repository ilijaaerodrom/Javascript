/*
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

//document.getElementById(`p1`).innerHTML = `Hello ` + firstName;
//document.getElementById(`p2`).innerHTML = `You are ` + myAge + ` years old`;
//document.getElementById(`p3`).innerHTML = `Enrolled: ` + student;

///////////////////////////////////////////////////////////

/*
  arithmetic expression is a combination of ...
  operand (values, variables, ect.)
  operators (+ - * / %)
  that can be evaluated to a value
  ex. y = x + 5;


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
//num1 = Math.sqrt(x);

console.log(num1);

////////////////////////////////////////////////////////////

// Hypotenuse calc practise
/*
let a;
let b;
let c;

a = window.prompt(`Enter side A`);
a = Number(a);

b = window.prompt(`Enter side B`);
b = Number(b);

c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
console.log(`Side c:`, c); 


document.getElementById(`submitButton`).onclick = function() {

a = document.getElementById(`aTextbox`).value;
a = Number(a);

b = document.getElementById(`bTextbox`).value;
b = Number(b);

c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

document.getElementById(`cLabel`).innerHTML = `Side C: ` + c;
}

///////////////////////////////////////////////////////////////////

// Counter program

let count = 0;

document.getElementById(`increaseButton`).onclick = function() {
  count -= 1;
  document.getElementById(`countLabel`).innerHTML = count;
}

document.getElementById(`resetButton`).onclick = function() {
  count = 0;
  document.getElementById(`countLabel`).innerHTML = count;
}

document.getElementById(`decreaseButton`).onclick = function() {
  count += 1;
  document.getElementById(`countLabel`).innerHTML = count;
}

////////////////////////////////////////////////////////////////////////

// Random Number Generator

let firstDise;
let seconfDise;
let thirdDise;

document.getElementById(`rollButton`).onclik = function() {

   firstDise = Math.floor(Math.random() * 6) + 1;
   seconfDise = Math.floor(Math.random() * 6) + 1;
   thirdDise = Math.floor(Math.random() * 6) + 1;

   document.getElementById(`firstLabel`).innerHTML = firstDise;
   document.getElementById(`secondLabel`).innerHTML = secondDise;
   document.getElementById(`thirdLabel`).innerHTML = thirdDise;
}

////////////////////////////////////////////////////////////////////////

// Useful string properties & methods

let myName = `   Ilija Trajkovski  `;
let phoneNumber = `123-456-7890`;

console.log(myName.length);
console.log(myName.charAt(0));
console.log(myName.indexOf(`T`));
console.log(myName.lastIndexOf(`i`));
console.log(myName.trim());

phoneNumber = phoneNumber.replaceAll(`-`, `/`);
console.log(phoneNumber);

////////////////////////////////////////////////////////////////////////

// Slice() extracts a section of a string
// and returns it as a new string,
// without modifing the original string

let fullName = `Ilija Trajkovski`;
let firstNameOfMe;
let lastNameOfMe;

//firstNameOfMe = fullName.slice(0, 5);
//lastNameOfMe = fullName.slice(6);

firstNameOfMe = fullName.slice(0, fullName.indexOf(` `));
lastNameOfMe = fullName.slice(fullName.indexOf(` `) + 1);

console.log(firstNameOfMe);
console.log(lastNameOfMe);

////////////////////////////////////////////////////////////////////////

// Method chaining = caling one method after another
//  in one continuous line of code

let name = `ilija`;

let letter = name.charAt(0).toUpperCase();

console.log(letter);

////////////////////////////////////////////////////////////////////////

// if statements = a basic form of decision making
//                 if a condition is true, then do something
//                 if not, then don't do it

let yourAge = 12;

if (yourAge >= 18) {
  console.log(`You are an adult!`);
}
else if (yourAge < 0) {
  console.log(`You haven't been born yet`);
}
else {
  console.log(`Yuo are a child!`);
}

let online = false;

if (online) {
  console.log(`You are online!`);
}
else {
  console.log(`You are offline!`);
}

//////////////////////////////////////////////////////////////////////////

// checked property

document.getElementById("myButton").onclick = function() {

  const myCheckBox = document.getElementById(`myCheckBox`);
  const visaBtn = document.getElementById(`visaBtn`);
  const mastercardBTN = document.getElementById(`mastercardBTN`);
  const paypalBtn = document.getElementById(`paypalBtn`);

  if (myCheckBox.checked) {
    console.log(`You are subcrribed`);
  } else {
    console.log(`You are not subscribed`);
  }

  if (visaBtn.checked) {
    console.log(`You are paying with Visa`);
  }
  else if (mastercardBTN) {
    console.log(`You are paying with mastercard`);
  }
  else if (paypalBtn.checked) {
    console.log(`You are paying with papypal`);
  }
  else {
    console.log(`You must select a paymant type!`);
  }
};

/////////////////////////////////////////////////////////////////////////

// Switch = statement that examines a value
//          for a match aganst many case clauses
//          More efficient that many "if"


let grade = `A`;

switch (grade) {
    case `A`:
    console.log(`You did great!`);
    break;
    case `B`:
    console.log(`You did good!`);
    break;
    case `C`:
    console.log(`You did okey!`);
    break;
    case `D`:
    console.log(`You passed ... barely!`);
    break;
    case `F`:
    console.log(`You Failed!`);
    break;

  default:
    console.log(grade, `Is not a letter grade`);
} 
*/
let grade = `60`;

switch (true) {
    case grade >= 90:
    console.log(`You did great!`);
    break;
    case grade >= 80:
    console.log(`You did good!`);
    break;
    case grade >= 70:
    console.log(`You did okey!`);
    break;
    case grade >= 60:
    console.log(`You passed ... barely!`);
    break;
    case grade > 60:
    console.log(`You Failed!`);
    break;

  default:
    console.log(grade, `Is not a letter grade`);
} 

//////////////////////////////////////////////////////////////////////////

// Gives us the ability to check more than 1 condition concurrently
// && AND (Both conditions must be true)
// || OR (Either condition can be true)


