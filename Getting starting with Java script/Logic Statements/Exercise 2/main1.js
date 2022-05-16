

let userInput = prompt(`Ask a question`);
let message;
switch (userInput) {
  case "what are you doing?":
    message = `I am eating`;
    break;
  case "where are you going":
    message = `nowhere`;
    break;
  case "are we there yet":
    message = `no`;
    break;
  case "Do you know coding":
    message = `no`;
    break;
  default:
    message = `I don't understend the question`;
}
console.log(userInput);
console.log(message);