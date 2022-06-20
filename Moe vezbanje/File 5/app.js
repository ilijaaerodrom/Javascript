

// Loops
/* while loop
   do while loop
   for loop
   for in
   for of loop
*/

// While Loops
/* The while loop will only be executed as long as
the condition is true, so if the condition is false
to began with, the code inside will be skipped. */
//while (condition) {
// code gets executed as long as the condition is true
//}
let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

let someArray = [`Mike`, `Antal`, `Marc`, `Emir`, `Louiza`, `Jacky`];
let notFound = true;

while (notFound && someArray.length > 0) {
  if (someArray[0] === `Louiza`) {
    console.log(`Found her`);
    notFound = false;
  } else {
    someArray.shift();
  }
}

let nr1 = 0;
let nr2 = 1;
let temp;

fibonacciArray = [];

while (fibonacciArray.length < 25) {
  fibonacciArray.push(nr1);
  temp = nr1 + nr2;
  nr1 = nr2;
  nr2 = temp;
  console.log(temp);
}

// Vezba
/*
let maxNumber = 10;
let randomNumber = Math.floor(Math.random() * (maxNumber + 1));
console.log(randomNumber);
let rightNumber = false;

while (!rightNumber) {
  let userNumber = prompt(`Enter a number between 0 and` + maxNumber);
  userNumber = Number(userNumber);
  if (userNumber === rightNumber) {
    alert(`You guest the right number!Congrats`);
    rightNumber = true;
  } else if (userNumber < randomNumber) {
    alert(`You guest lower than the right number!Try again`);
  } else (userNumber > rightNumber) 
    alert(`You guest higher than the right number!Try again`);
  }
console.log(rightNumber); */

// Do While loops
// code to be executed if the condition is true
let number;
do {
  number = prompt(`Please enter a number between 0 and 100:`);
} while (!number >= 0 && number <100);
console.log(number);

// Vezba
