
/*
// 1.Variables
// Let, Const

let age = 30;
age = 36; // change the value
console.log(age);

const name = `Ilija`;
name = `iljo`; // can't change the value with const
console.log(name);

// 2.String, Numbers, Boolean, null, undefined

const fullName = `Martin`;
const ageOfMe = 36;
const isCool = true;
const x = null;
const y = undefined;
let z; // undefined

console.log(typeof fullName);
console.log(typeof ageOfMe);
console.log(typeof isCool);
console.log(typeof x);
console.log(typeof y);
console.log(typeof z);

// Strings

const name = `Ilija`;
const age = 36;
const nameAge = `My name is ${name} and I am ${age} years.`;
console.log(nameAge);
// Concatenation
console.log(`My name is ` + name + ` and I am ` + age);
// Template String
console.log(`My name is ${name} and I am ${age}`);

const s = `Hello World!`;
console.log(s.length);
console.log(s.toLowerCase());
console.log(s.toUpperCase());
console.log(s.substring(0, 5).toUpperCase());
console.log(s.split(``));

const skySoft = `technology, computers, it, code`;
console.log(skySoft.split(`,`));


// Arrays

const fruits = [`apples`, `oranges`, `pears`, 10, true];
fruits.push(`mango`); // dodava vrednost na kraj
fruits.unshift(`banana`); // dodava na pocetok
fruits.pop(); // go brishe poslednoto
console.log(fruits);
console.log(fruits[1]);
console.log(fruits.indexOf(`oranges`));


// Object Literals

const person = {
  firstName: `Ilija`,
  lastName: `Trajkovski`,
  age: 36,
  hobbies: [`music`, `sport`, `movies`],
  address: {
    street: `ulica 1`,
    city: `Skopje`,
    state: `Macedonia`
  }
}

person.email = `iljoaerodrom@hotmail.com`; // dodava
console.log(person);
console.log(person.firstName);
console.log(person.firstName, person.lastName);
console.log(person.hobbies[2]);
console.log(person.address.city);

const todos = [
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
    text: `Dentist app`,
    isCompleted: false
  }
];
console.log(todos);
console.log(todos[1].text);


// For loop

for (let i = 0; i < 10; i++) {
  console.log(`For Loop Number: ${i}`);
}

// While loop

let i = 0;
while (i < 10) {
  console.log(`While Loop Number: ${i}`);
  i++
}

const todos = [
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
    text: `Dentist app`,
    isCompleted: false
  }
];

for (let i = 0; i < todos.length; i++) {
  console.log(todos[i].text);
}

// for of loop

for (let todo of todos) {
  console.log(todo);
  console.log(todo.text);
}

// forEach

todos.forEach(function (todo) {
  console.log(todo.text);
});

// Map

const todoText = todos.map(function (todo) {
  return todo.text
});
console.log(todoText);

// Filter

const todoCompleted = todos.filter(function (todo) {
  return todo.isCompleted === true;
})
console.log(todoCompleted); */


// Conditionals

const x = 4;
const y = 11;

if (x > 5 || y > 10) {
  console.log(`x is grater than 4 and y is grater than  10`);
}

// Ternary operator

const a = 10;
const color = a > 10 ? `red` : `blue`;
console.log(color);

// Switch
