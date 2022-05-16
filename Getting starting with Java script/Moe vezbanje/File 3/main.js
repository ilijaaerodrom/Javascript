

let clubs = [`Real Madrid`, `Barcelona`, `AC Milan`, `Inter`, `Vardar`, `Sileks`];
console.log(clubs[1]);
console.log(clubs[-1]);
console.log(clubs.length -1);
clubs[5];
console.log(clubs[5]);

let shoppingList = [`Milk`, `Bread`, `Apples`];
console.log(shoppingList.length);
shoppingList[1] = `Bananas`;
console.log(shoppingList);

// Add elements with push method
clubs.push(`Roma`);
let newListOfClubs = clubs.push(`Roma`);
console.log(clubs);

const numberOfItems = [`Ilija`, `Skopje`, `Aerodrom`, 35, `Diet`, true];
console.log(numberOfItems);
console.log(numberOfItems.length);
numberOfItems[3] = 36;
console.log(numberOfItems);
numberOfItems.push(`Passat`);
console.log(numberOfItems);

// splice
numberOfItems.splice(1,0, `Trajkovski`);
console.log(numberOfItems);
const months = [`january`, `march`, `april`, `june`];
months.splice(1,0, `february`);
console.log(months);
months.splice(4,3, `may`);
console.log(months);
clubs.splice(1,3);
console.log(clubs);
let newCars = [`toyota`, `passat`, `bmw`, `honda`, `ford`];
console.log(newCars);
newCars


// concat
let shoppingList1 = [`Milk`, `Bread`, `Apples`];
const numberOfItems1 = [`Ilija`, `Skopje`, `Aerodrom`, 35, `Diet`, true];
let newList = shoppingList1.concat(numberOfItems1, numberOfItems1);
console.log(newList);

//pop
clubs.pop();
console.log(clubs);
clubs.pop();
console.log(clubs);
shoppingList.pop();
console.log(shoppingList);

// shift
clubs.shift();
console.log(clubs);
shoppingList.shift();
console.log(shoppingList);
