

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
newCars.splice(2,2);
console.log(newCars);
newCars.sort();
console.log(newCars);


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

// Multidimensional Arrays
let mulArr1 = [1, 2, 3];
let mularr2 = [4, 5, 6];
let mulArr3 = [5, 6, 7];
let allMulArr = [mulArr1, mularr2, mulArr3];
console.log(allMulArr);
let allMulArr1 = [[mulArr1, mularr2, mulArr3]];
console.log(allMulArr1);
let someArr = allMulArr[1,1];
console.log(someArr);

//Vezba
let valArr1 = [1, 2, 3];
let valArr2 = [valArr1, valArr1, valArr1];
console.log(valArr2);

// Objects can group multiple variables into one
let dog = {
  dogName: `Reks`,
  weight: 40,
  color: `white`,
  breed: `pudle`,
  age: 5,
  burglarBiter: true
};
console.log(dog);
let dogColor1 = dog.color;
console.log(dogColor1);

// Updating Objects
dog.breed = `Husky`;
dog[`weight`] = 35;
console.log(dog);
dog.color = `brown-black`;
console.log(dog);
dog[`age`] = 8;
let newAge = `age`;
console.log(dog[newAge]);

// Vezba
myCar = {
  make: `folcwagen`,
  model: `passat`,
  year: `2008`,
  color: `silver`,
  doors: 5,
  manual: true
};
let newColor = `color`;
myCar[newColor] = `red`;
console.log(myCar[newColor]);
newColor = `forSale`;
myCar[newColor] = true;
console.log(myCar[newColor]);
console.log(myCar.make + ` ` + myCar.model);
console.log(`forSale ` +  myCar[newColor]);

// Objects in Objects
let company = {
  companyName: `Healty Candy`,
  activities: [`food manufactoring`, `improving kids health`,
              `manufactoring toys`],
    address: {
      street: `2nd street`,
      number: `123`,
      zipcode: `33116`,
      city: `Miami`,
      state: `Florida`
    },
    yearOfEstamblishment: 2001          
};
  company.address.zipcode = `33117`;
  console.log(company);
  company[`address`][`city`] = `San Jose`;
  console.log(company[`address`][`city`]);
  let activity = company.activities[1];
  console.log(activity);

  // Objects in Arrays
  // Objects in Arrays in Objects

  // Vezba

  let people = {
    friends: [],
  };

  let Bojan = {
    firstName: `Bojco`,
    lastName: `Popovski`,
    value: `34`
  }

  let Davor = {
    firstName: `Davor`,
    lastName: `Rashic`,
    value: `35`
  }

  let Zoki = {
    firstName: `Zoran`,
    lastName: `Ognanoski`,
    value: `35`
  }

   people.friends.push(`Bojan`);
   console.log(Bojan);
   people.friends.push(`Davor`);
   console.log(Davor);
   people.friends.push(`Zoki`);
   console.log(Zoki);
   
  // Vezba

const theList = [`Laurence`, `Svekis`, true, 35, null, 
undefined, {test: `one`, score: 55}, [`one`, `two`]];
console.log(theList);
theList.shift();
theList.pop();
console.log(theList);
theList.unshift(`FIRST`);
console.log(theList);
theList.splice(3,4, `hello world`);
console.log(theList);
let index = theList.indexOf(true);
theList[index] = `MIDDLE`;
console.log(theList);
theList.push(`LAST`);
console.log(theList);

// Vezba - Company Product Catalog













// Self - Check Quiz
const myArr1 = [1,3,5,6,8,9,15];
console.log(myArr1.indexOf(0));
console.log(myArr1.indexOf(3));

const index1 = myArr1.indexOf(`1`);
myArr1[index1] = `4`;
console.log(myArr1);

