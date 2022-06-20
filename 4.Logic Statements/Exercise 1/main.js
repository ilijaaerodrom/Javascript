/*

let firstValue = true;
console.log(firstValue);

if (firstValue) {

  console.log(`first statemnt is true`);
}

if (!firstValue) {
  console.log(`second statement is true`);
} else {
  console.log(`second statement is false`);
}  */

let input = prompt(`What is your age`);
prompt = (`What is your age`);
console.log(input);
let age = Number(input);
let message;

if (age >= 21) {
  message = `You can enter and drink alcohol!`;
} else if (age >= 19) {
  message = `You can enter but you can not drink alcohol`;
} else {
  message = `You can not enter`;
}
console.log(message);