
/*function logName() {
  console.log(`ilija`);
}

function logNameWithParams(ime) {
  console.log(ime);
} */

//1.varijabla sto zacuvuva broj na minuti pr.360
//2.kreirame funkcija koja prima parametar

//3.vo samata funkcija kreirajte varijabla sto bi go zacuvala rezultatot
// samiot rezultat e parametarot / 60
//4.napravite return na samata varijabla na rezultatot
//5.treba da se povika samata fukcija so zacuvuvanata prva varijabla
//kako argument
//pr.imeNaFunkcija(argument)
//6.povikuvanjeto na funkcijata treba da bide vrapnato vo console.log
//pr.console.log(imeNaFunkcija(argument));

/*let minutes = 360;

function minutesToHours(min) {
  let result = min / 60;
  return result;
}
console.log(minutesToHours(minutes));

// Vezba

let arrOfCounties = [`Australia`, `Germany`, `America`];
let leng = arrOfCounties[2].length;
console.log(arrOfCounties[2], leng);

function longestCountryName(arr) {
  let longName;

  return longName;
}
let longestName = longestCountryName(arrOfCounties);

function longestCountryName(arr) {
  let longestName = "";
  if (typeof arr === "object" && arr.length > 0)
    for (let i = 0; i < arr.length; i++)
      longestName = longestName.length < arr[i].length ? arr[i] : longestName

  console.log(longestName, longestName.length);
}
*/
// Vezba - create a basic calculator

let x = 12;
let y = 10;
let oprator = '-';


function basicCalculator(param1, param2, param3) {
  let result;
  let oparation = `${param1} ${param3} ${param2}`;

  switch (param3) {
    case '*':
      result = param1 * param2;
      console.log("The operation is multiplication", oparation, "= " + result);
      break;
    case '+':
      result = param1 + param2;
      console.log("The operation is sum", oparation, "= " + result);
      break;
    case '-':
      result = param1 - param2;
      console.log("The operation is subtraction", oparation, "= " + result);
      break;
  }
}

basicCalculator(x, y, oprator);
basicCalculator(5, 10, '-');

// Recursive functions

function getRecursive(num) {
  console.log(num);
  if (num > 0) {
    getRecursive(--num);
  }
}

getRecursive(5);



function logRecursive(nr) {
  console.log(`Started function:`, nr);
  if (nr > 0) {
    logRecursive(nr - 1);
  } else {
    console.log(`done with recursion`);
  }
  console.log(`Ended function`, nr);
}

logRecursive(3);










