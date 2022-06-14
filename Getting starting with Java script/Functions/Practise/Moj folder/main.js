
// Functions

function sayHello() {
  let you = prompt(`What is your name?`);
  console.log(`Hello`, you + `!`);
}
sayHello();

let varContainingFunction = function () {
  let varInFunction = `I am in a function`;
  console.log(`Hi threre`, varInFunction);
}
varContainingFunction();

// Vezba 6.1

let number1 = 20;
let number2 = 15;

function twoParamaters(firstNumber, secondNumber) {
  console.log(firstNumber + secondNumber);
}
twoParamaters(number1, number2);
twoParamaters(5, 85);

// Vezba 6.2

let myArray = [`football`, `job`, `wife`, `kids`];
function askAQuestion() {
  let myQuestion = prompt(`What do you want?`);
  let randomNumber = Math.floor(Math.random() * 4);
  console.log(myQuestion, `is`, myArray[randomNumber]);
}
askAQuestion();

// Vezba 6.3

// kreirame variabla so vrednost od nekoj broj
// kreirame vtora variabla so vrednost od nekoj broj
// kreirame treta variabla so nekoj operator ex: "-" ili "+"
let argumentNumber1 = 12;
let argumentNumber2 = 20;
let argumentOperator = "/";

// kreirame funkcija so tri prametri 
// ex: function imeNaFunkcija(param1, param2, param3) {}

function myCalculator(paramNumber1, paramNumber2, paramOperator) {
  switch (paramOperator) {
    case "+":
      return paramNumber1 + paramNumber2;
      break;
    case "-":
      return paramNumber1 - paramNumber2;
      break;
    case "*":
      return paramNumber1 * paramNumber2;
      break;
    case "/":
      return paramNumber1 / paramNumber2;
      break;
  }
}
// vo block scope na funcijata treba da napravime switch statment 
/*
  ex: switch(param3) {
      case "+":
          return param1 + param2;
          break;
      case "-":
        return param1 - param2;
        break;
    }
*/

console.log(myCalculator(argumentNumber1, argumentNumber2, argumentOperator));
console.log(myCalculator(10, 20, "+"));
console.log(myCalculator(10, 20, "-"));