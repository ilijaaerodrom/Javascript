

let randomNumber = Math.random();
randomNumber = randomNumber * 5;
randomNumber = Math.floor(randomNumber);

let inputUser = prompt(`Choose a number`);
let message;
switch (randomNumber) {
  case 0:
    message = `try again`;
    break;
  case 1:
    message = `you will be rich`;
    break;
  case 2:
    message = `buy a new car`;
    break;
  case 3:
    message = `you are fat`;
    break;
  case 4:
    message = `get a haircut`;
    break;
  case 5:
    message = `get a job`;
    break;
}
console.log(inputUser);
console.log(message);