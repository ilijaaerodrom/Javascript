

let userName = prompt(`Enter your name: `);

let message;

switch (userName.toLowerCase()) {
  case `ilija`:
  case `boban`:
  case `ljupco`:
  case `maja`:
    message = `Hello friend!`
    break;

  default:
    message = `I don't know you!`
    break;
}
alert(message);