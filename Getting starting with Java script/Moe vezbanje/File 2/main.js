
//prompt(`Hi!How are You?`);

Math.random(50);
console.log(Math.random(50) * 100);

console.log(Math.floor(Math.random(50) * 100));

let language = `JavaScript!`;
let anotherWord = `It is so much fun.`;
let message = `Let's \nlearn ${language} ${anotherWord}`;
console.log(message);


// Arrays
firstArr = [`black`, `yellow`, `green`, `red`, `blue`];
const arr = [`hi there`];
arr[0] = `new array`;
console.log(arr);

// Accessing elements - array`s index from 0 1 2 3
cars = [`toyota`, `passat`, `yugo`];
console.log(cars[1]);

// Overwritting Elements
cars[0] = `honda`;
console.log(cars);

// Built-In Length property
colors = [`black`, `white`, `green`, `red`, `yellow`, `pink`];
booleans = [true, false, false, true];
emptyArray = [];

console.log(`Number of values`, colors.length);
console.log(colors[3]);
colors[3] = `purple`;
console.log(colors[3]);
console.log(`Number of values`, booleans.length);
console.log(emptyArray.length);

palette = [`black`, `white`, `green`, `red`, `yellow`, `pink`];
console.log(palette);
console.log(palette.length);
console.log(palette[4]);
console.log(colors.length - 1); // Acess to the last element of the array
numbers = [12, 24, 36];
numbers[5] = 48;
console.log(numbers);

// vezba
shoppingList = [`Milk`, `Bread`, `Apples`];
console.log(shoppingList.length);
shoppingList[1] = `Bananas`;
console.log(shoppingList);

// Array Methods
// Adding and Replacing Elements

// We can Add Elements with the push method, it goes to the end of the array
let fruits = [`apple`, `orange`, `lemon`];
console.log(fruits);
fruits.push(`peach`);
console.log(fruits);
fruits.push(`lime`);
console.log(fruits);

// We can Add Elements with the splice method at a certain index
let clubs = [`Real Madrid`, `Barcelona`, `Milan`, `Inter`, `Vardar`];
clubs.splice(2, 2, `Atl.Madrid`, `Valencia`);
console.log(clubs);

// Add another array to your array with concat method
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = arr1.concat(arr2);
console.log(arr3);
let arr4 = arr3.concat(7, 8, 9);
console.log(arr4);

// Deleting Elements
// Removing the last element from an array is done with pop
arr4.pop();
console.log(arr4);

// Deleting the First Element is done by shift
arr4.shift();
console.log(arr4);

/* With splice we can specify the index from where we want to
start deleting, and then the number od elements we want to delete */
arr4.splice(1, 3);
console.log(arr4);

// Sorting - from small to high and A-Z
let names = [`James`, `Alicia`, `Fatiha`, `Maria`, `Bert`];
names.sort();
console.log(names);

// Reverse
names.reverse();
console.log(names);

//vezba
let shoppList = [`Milk`, `Bread`, `Apples`];
console.log(shoppList);
shoppList.splice(1, 1, `Bananas`, `Eggs`);
console.log(shoppList);
shoppList.pop();
console.log(shoppList);
shoppList.sort();
console.log(shoppList);
console.log(shoppList.length - 1);
shoppList.splice(1, 0, `Carrots`, `Lettuce`);
console.log(shoppList);
let newShoppList = [`Juice`, `Pop`];
let combinedShoppList = shoppList.concat(newShoppList, newShoppList);
console.log(combinedShoppList);
let lastIndexOfPop = combinedShoppList.indexOf(`Pop`);
console.log(lastIndexOfPop);

