
/*
let prize = Math.random();
prize = prize * 10;
prize = Math.floor(prize);
console.log(prize); */

let prize = prompt(`Insert a number between 0 and 10`);
prize = Number(prize);
let message = `My selection `;

switch (prize) {
  case 0:
  case 1:
    message = message + `coins`;
    break;
  case 3:
    message += `bear`;
    break;
  case 4:
  case 5:
  case 6:
    message = message + `lollipop`
    break;
  case 7:
    message = message + `rabbit`
    break;
  case 8:
    message = message + `water`
    break;
  case 9:
  case 10:
    message = message + `keychain`
    break;
  default:
    message = `You selected a wrong number`;
    break;
}
alert(message);