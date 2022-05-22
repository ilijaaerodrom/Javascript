

let userInput = prompt(`Enter a number from 0 -10`);
let userNumber = Number(userInput);
let randomNumber = Math.floor(Math.random() * 10);
let message;

if (userNumber < randomNumber) {
  message = `Your number ${userNumber} is smaller than ${randomNumber}`;
} else if (userNumber === randomNumber) {
  message = `Your  number ${userNumber} is equal to ${randomNumber}`;
} else if (userNumber > randomNumber) {
  message = `Your number is grater than ${randomNumber}`;
} else {
  message = `Your number is invalid`;
}
alert(message);