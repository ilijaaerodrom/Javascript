

let ageForPub = prompt(`How old are you?`);
ageForPub = Number(ageForPub);
let message;

if (ageForPub >= 21) {
  console.log(`You can enter and drink alcohol`);
} else if (ageForPub >= 19) {
  console.log(`You can enter but you cannot drink alcoloh`);
} else {
  console.log(`You cannot enter and drink alcohol`);
}