

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







