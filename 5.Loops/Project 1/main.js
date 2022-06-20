
let tableArray = [];
let numberOfMultiplication = 7;

for (let i = 0; i < numberOfMultiplication; i++) {
  let tempArray = [];
  for (let j = 0; j <= numberOfMultiplication; j++) {
    if (i * j === 36)
      tempArray.push(i * j)
    continue;
  }
  tableArray.push(tempArray);
}
console.log(tableArray);