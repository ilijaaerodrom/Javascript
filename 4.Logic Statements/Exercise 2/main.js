


/*
let ID = true;
let message = ID ? `Valid` : `Invalid`;
console.log(message); */


let randomNumber = Math.random(0.5);
randomNumber = randomNumber * 10;
randomNumber = Math.floor(randomNumber);
console.log(randomNumber);
let ressponseArray = [`eating`, `sitting`, `drinking`, `running`, `sleeping`, `riding a bicycle`, `climbing`, `chilling`,];
let message = `I am `;
prompt(`Enter a question.`);
switch (randomNumber) {
  case 1:
    message = message + ressponseArray[0];
    break;

  case 2:
    message = message + ressponseArray[1];
    break;

  case 3:
    message = message + ressponseArray[2];
    break;

  case 4:
    message = message + ressponseArray[3];
    break;

  case 5:
    message = message + ressponseArray[4];
    break;

  case 6:
    message = message + ressponseArray[5];
    break;

  case 7:
    message = message + ressponseArray[6];
    break;

  case 8:
    message = message + ressponseArray[7];
    break;

  default:
    message = `I don't know what i doing`
    break;
}
console.log(message);