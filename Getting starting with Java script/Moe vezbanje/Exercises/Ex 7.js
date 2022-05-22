

let userName = prompt(`Enter a name`);
let message;

switch (userName) {
  case `iljo`:
  case `mishko`:
  case `davor`:
    message = `hello friend`;
    break;

  default:
    message = `i don't know you`;
    break;
}
alert(message);