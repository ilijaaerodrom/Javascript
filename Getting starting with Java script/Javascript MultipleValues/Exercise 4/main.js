

let myCar = {
  make: `folcwagen`,
  model: `passat`,
  year: 2008,
  color: `silver`,
  doors: 5,
  manual: true,
  aclerate(kmh) {
    let acc = 10;
    return acc * kmh;
  }
};

console.log(myCar);

let propertyVariable = `color`;
myCar[propertyVariable] = `green`;
console.log(myCar[propertyVariable]);
propertyVariable = `forSale`;
myCar[propertyVariable] = true;

console.log(myCar.make + ` ` + myCar.model);
console.log(`For Sale ` + myCar[propertyVariable]);
console.log(myCar.aclerate(10));

