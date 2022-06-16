

// Practise 2

let arr = [`grapefroot`, 4, `hello`, 5.6, true];

function printStuff(ele, ind) {
  console.log(`Element: `, ele);
  console.log(`Type of element: `, typeof ele);
  console.log(`Index: `, ind);

}

arr.forEach(printStuff);


let mojVtorArej = [`squirrel`, 5, `Trejd`, new Date(), true];

function checkString(x, y) {
  return typeof x === `string`;
}
console.log(new Date);
let filtriranArray = mojVtorArej.filter(x => typeof x === `string`);
console.log(filtriranArray);

let mojArrejSoBrojki = [1, 2, 3, 4, 5];
function nashaFunkcija(para1, para2, para3) {
  console.log();
  console.log();
  console.log();
}
let mapiranAriej = mojArrejSoBrojki.map(nashaFunkcija);

// Vezbi

// 8.2

let arr1 = ["Laurence", "Mike", "Larry", "Kim", "Joanne",
  "Laurence", "Mike", "Laurence", "Mike", "Laurence", "Boban", "Mike"];

let fileredArr = arr1.filter((element, index, arej) => {
  // console.log(element, "at position", index);
  // console.log(arej.indexOf(element), "is equal to", index, arej.indexOf(element) === index);
  return arej.indexOf(element) === index;
});

console.log(fileredArr);

// Vezba

// 8.3

let arrOfNumbers = [23, 12, 55, 100, 125, 3];

let modifyArray = arrOfNumbers.map((element, index) => {
  return element * 2;
})
console.log(arrOfNumbers, modifyArray);


// Practise 3

let firstString = `Zdravo `;
let secondString = `Svetu`;

console.log(firstString + secondString + `!`);
console.log(firstString.concat(secondString, `!`));

let result = `Hello Javascript`;
let arr_rezult = result.split(``);
console.log(arr_rezult);

// Vezba

// 8.4

let myString = `thIs will be capiTalized for each word`;

function capitalizesWords(str) {
  let myLowerString = str.toLowerCase();
  let myCapitaziedArray = [];
  let myStringArray = myLowerString.split(``);

  for (let i = 0; i < myStringArray.length; i++) {
    let firstLetter = myStringArray[i].slice(0, 1);
    firstLetter = firstLetter.toUpperCase();
    let restOfWord = myStringArray[i].slice(1);
    let wholeWord = firstLetter + restOfWord;
    myCapitaziedArray.push(wholeWord);
  }

  let newCapitalizedWords = myCapitaziedArray.join(``);
  return newCapitalizedWords;
}
console.log(capitalizesWords(myString));

// Vezba

// 8.5

let myString1 = "I love Javascript";
function replaceVowels(str) {
  let myLowerCaseString = str.toLowerCase();
  let myVowelArray = ["a", "e", "i", "o", "u"];

  myVowelArray.forEach(element => {
    myLowerCaseString =
      myLowerCaseString
        .replaceAll(element, myVowelArray.indexOf(element));
  });
  return myLowerCaseString;
}
console.log(replaceVowels(myString1));

// Vezba

// 8.6

console.log(Math.PI);

let ceil = Math.ceil(5.7);
let floor = Math.floor(5.7);
let round = Math.round(5.7);

console.log(`Ceil:`, ceil);
console.log(`Floor:`, floor);
console.log(`Round:`, round);
console.log(Math.random());
console.log(Math.floor(Math.random() * 11));
console.log(Math.floor((Math.random() * 10) + 1));
console.log(Math.floor((Math.random() * 100) + 1));

//console.log(Math.PI);


let round2 = Math.round(5.4);

// console.log("Ceil:", ceil);
// console.log("floor:", floor);
// console.log("Round:", round);
// console.log("Round2:", round2);

// console.log(Math.random());

// console.log(Math.floor(Math.random() * 11));
// console.log(Math.floor((Math.random() * 10) + 1));
// console.log(Math.floor((Math.random() * 100) + 1));
// console.log( Math.random());



function generateRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// let i = 0;
// while (i < 100) {
//    console.log("Sluchaen broj:", generateRandom(1, 100));
//    i++;
// }

for (let i = 0; i < 100; i++) {
  console.log("Sluchaen broj:", generateRandom(1, 100));
}


// Dates

let currDateTime = new Date();
console.log(currDateTime);

let now2 = Date.now();
console.log(now2);

let specificDate = new Date(2022, 1, 10, 12, 10, 15, 100);
console.log(specificDate);

let now = new Date();

console.log(`Day of the week:`, now.getDay);






