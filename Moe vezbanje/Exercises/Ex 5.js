

let randomNumber = Math.random();
randomNumber = randomNumber * 10;
randomNumber = Math.floor(randomNumber);

let prize = prompt(`Select a number between 0 and 10`);
prize = Number(prize);
let message = `My selection:`;
switch (prize) {
  case 0:
  case 1:
  case 2:
    message = message + `burek`;
    break;
  case 4:
  case 5:
  case 6:
    message = message + `letuvanje`;
    break;
  case 7:
  case 8:
    message = message + `shteka cigari`;
    break;
  case 9:
  case 10:
    message = message + `paket zejtin`;
    break;
  default:
    message = message + `Please try again`
    break;
}
console.log(prize);
console.log(message);