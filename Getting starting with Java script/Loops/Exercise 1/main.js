
let maxNumber = 10;
let randomNumber = Math.floor(Math.random() * (maxNumber + 1));
let rightNumber = false;

while (!rightNumber) {
  let userNumber = prompt(`Enter a number between 0 and` + maxNumber);
  userNumber = Number(userNumber);

  if (userNumber === randomNumber) {
    alert(`You guest the right number.Congrats!`);
    rightNumber = true;
  } else if (userNumber > randomNumber) {
    alert(`You guest higher then the right number!Try again!`);
  } else (userNumber < randomNumber)
  alert(`You guest lower then the right number!Try again!`);
}
console.log(randoNumber);