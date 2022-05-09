
// Variables

let name = 'Ilija';
console.log(name);

// Cannot be a reserved keyword
// Should be meaningful
// Cannot start with a number (1name)
// Cannot contain a space or hyphen (-)
// Are case-sensitive

let firstName = 'makedonija';
console.log(firstName);

// Constants

const interestRate = 0.3;
console.log(interestRate);

// Primitives / Value Types
// String, Number, Boolean, undefined and null

let name1 = 'Ilija'; // String
let age = 30; // Number
let isApproved = true; // Boolean
let firstName1 = undefined;
let selectedColor = null;

// Refrence Types
// Object, Array and Function

// Object
let name2 = `Ilija`;
let age1 = `35`;
let person = {
  name2: `Ilija`,
  age1: 35
};

// Dot Notation
person.name2 = `Ronaldo`;
// Bracket Notation
person[`name2`] = `Il Fenomeno`;

console.log(person.name2);

// Arrays
let selectedColors = [`red`, `blue`];
selectedColors[2] = `green`;
console.log(selectedColors.length);

// Functions
// Perfoming a task
function greet(name, lastName) {
  console.log(`Hello ` + name + ` ` + lastName);
}
greet(`Tramp`, `Donald`);

// Calculating a value
function square(number) {
  return number * number;
}
console.log(square(2));








