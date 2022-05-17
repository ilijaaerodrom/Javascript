

let myArray = [`Rock`, `Paper`, `Scissors`];
let userInput = prompt(`Enter: Rock, Paper or Scissors`);
let randomComputerNumber = Math.floor(Math.random() * 2);
let userNumber = myArray.indexOf(userInput);
let message;
if (userNumber !== -1) {


} else {
  message = `You entered invalid option`
}