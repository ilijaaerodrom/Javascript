// Logic statements
/* - if and if else 
   - else if
   - conditional ternary operators
   - switch */
// if and if else

/*let rain = true;
if (rain) {
  console.log(`Taking my umbrela outside`);
} else {
  console.log(`Leave my umbrella home`);
}

let age = 18;
if (age < 18) {
  console.log(`We are sorry, you cannot come inside`);
} else {
  console.log(`You are welcome`);
}

let hobby = `dancing`;
if (hobby === `dancing`) {
  console.log(`I love coding too`);
} else {
  console.log(`Can you teach that`);
}
// vezba
let myName = true;
console.log(myName);
if (myName === true) {
  console.log(`My name is Ilija`);
} else {
  console.log(`Your name is not Ilija`);
}

if (!myName === true) {
  console.log(`My name is Ilija`);
} else {
  console.log(`Your name is not Ilija`);
}

// Else If
let newAge = 30;
let cost = 0;
let message;
if (newAge < 3) {
  cost = 0;
  message = `Access is free under three`;
} else if (newAge >= 3 && newAge < 12) {
  cost = 5;
  message = `Access is 5 dollars`;
} else if (newAge >= 12 && newAge < 65) {
  cost = 10;
  message = `Access is 10 dollars`;
} else {
  cost = 7;
  message = `Access is 7 dollars`;
}
console.log(message);
console.log(`Your total cost ` + cost);

// Vezba
let properAge = prompt(`How old are you?`);
properAge = Number(properAge);
let newMessage;
if (properAge >= 21) {
  message = `You can enter and drink alchohol`;
} else if (properAge >= 19) {
  message = `You can enter, but you cannot drink alchohol`;
} else {
  message = `You cannot enter and drink alchohol`
}
console.log(message);

/* Conditional Ternary Operators
 It has three operands- operand1 ? operand2 : operand3;
 operand1 is the expression that is to be evaluated.
 If the value of the expression is true, operand2 gets
 executed, If the value of the expression is false,
 operator3 gets executed.
 

let age = 20;
let message = age < 18 ? `denied` : `allowed`;
console.log(message); 

// Vezba
let myId = true;
let message = myId ? `valid` : `invalid`;
console.log(message);

// Switch statements
switch (activity) {
  case `Get up`:
    console.log(`It is 06.30`);
    break;
  case `Breakfast`:
    console.log(`It is 07.00`);
    break;
  case `Drive to work`:
    console.log(`It is 07.30`);
    break;
  case `Lunch`:
    console.log(`It is 12.00`);
    break;
  case `Drive home`:
    console.log(`It is 15.30`);
    break;
  case `Dinner`:
    console.log(`It is 18.00`);
    break;
  default:
    console.log(`I cannot determine the current time`);
    break;
} 

let randomNumber = Math.random();
randomNumber = randomNumber * 10;
randomNumber = Math.floor(randomNumber);
console.log(randomNumber); 

// Vezba
let randomNumber = Math.random();
randomNumber = randomNumber * 5;
randomNumber = Math.floor(randomNumber);
let userInput = prompt(`Ask a question`);
let message;
switch (randomNumber) {
  case 0:
    console.log(`bravo`);
    break;
  case 1:
    console.log(`noooooooo`);
    break;
  case 2:
    console.log(`not bad`);
    break;
  case 3:
    console.log(`you are on fire`);
    break;
  case 4:
    console.log(`good luck`);
    break;
  case 5:
    console.log(`don't touch that`);
    break;
}
console.log(userInput);
console.log(message); */

// Vezba
let prize = prompt(`Insert a number between 0 and 10`);
prize = Number(prize);
let message = `My Selection`;
switch (prize) {
  case 0:
  case 1:
    message = message + ` one coin`;
    break;
  case 2:
  case 3:
    message = message + ` teddybear`;
    break;
  case 4:
  case 5:
  case 6:
    message = message + ` little car`;
    break;
  case 7:
    message = message + ` lollypop`;
    break;
  case 8:
    message = message + ` small game`;
    break;
  case 9:
  case 10:
    message = message + ` gold bar`

  default:
    message = ` You selected a wrong number`;
    break;
}
alert(message);

// Vezba
