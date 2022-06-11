
// Basic functions

function sayHello() {
  let you = prompt(`What's your name?`);
  console.log(`Hello`, you + `!`);
}
sayHello();

let varContainigFunction = function () {
  let varInFunction = `I'm in a function.`;
  console.log(`Hi there!`, varInFunction);
}
varContainigFunction();

// Vezba

let descArr = [`Strong`, `Smart`, `Fast`, `Beautiful`];
function nameDescription() {
  let name = prompt(`What's your name?`);
  let randomNumber = Math.floor(Math.random() * 4);
  console.log(name, `is`, descArr[randomNumber]);
}
nameDescription();


// Function arguments












// Return

// Variable scope in function

// Recursive functions

// Nested functions

// Anonymous function

// Function callbacks