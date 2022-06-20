

let arr = [`hi there`, 5, true];
console.log(arr);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);

console.log(typeof arr[0]);
console.log(typeof arr[1]);
console.log(typeof arr[2]);

let arr2 = new Array(10);
console.log(arr2);

let colors = [`red`, `green`, `blue`];
let boolean = [true, false, false, true];
let emptyArr = [];

console.log(`The lenght of the colors array is: ` + colors.length);
console.log(`The lenght of the boolean array is: ` + boolean.length);
console.log(`The lenght of the emptyArr array is: ` + emptyArr.length);

let arr10 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr10.length);
console.log(arr10[arr10.length - 1]);

let shopping = [`Milk`, `Bread`, `Apples`];
console.log(shopping.length);
shopping[1] = `Bannanas`;
console.log(shopping);


let favoriteFruits = [`grapefruit`, `orange`, `lemon`];
console.log(favoriteFruits);
favoriteFruits.push(`tangerine`);
console.log(favoriteFruits);

let lenghtOfFavoriteFruits = favoriteFruits.push(`line`);
console.log(favoriteFruits);


