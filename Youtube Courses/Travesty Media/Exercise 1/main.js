
// Variables
// let, var and const

// Primitiv types
// String, Number, Boolean, undefined, null


const raiting = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z;

// String
const name = 'Ilija';
const age = 35;
// Concatenation
console.log(`My name is ` + name + ` and I am ` + age);
// Template String
console.log(`My name is ${name} and I am ${age}`);

const s = `Hello World`;
console.log(s.length);
const f = `techology, computers, it, code`;
console.log(f.split(`,`))

// Arrays - variables that hold multiple values
const fruits = [`apples`, `oranges`, `pears`];
fruits[3] = `grapes`;
fruits.push(`mangos`);
fruits.unshift(`strawberries`);
console.log(fruits);
console.log(fruits[1]);
console.log(Array.isArray(fruits));

//Object
const person = {
  firstName: `John`,
  lastName: `Doe`,
  age: 30,
  hobbies: [`music`, `movies`, `sports`],  // Array
  address: {
    street: `50 main st`,
    city: `Boston`,
    state: `MA`
  }
}
person.email = `jonhdoe@gmail.com`;
console.log(person);


const todos = [     // Array with three objects
  {
    id: 1,
    text: `Take out trash`,
    isCompleted: true
  },
  {
    id: 2,
    text: `Meeting with boss`,
    isCompleted: true
  },
  {
    id: 3,
    text: `Dentist appt`,
    isCompleted: false
  },
];

// forEach, map, filter

todos.forEach(function (todo) {
  console.log(todo.text);
}







