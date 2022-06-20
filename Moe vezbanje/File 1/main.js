
// String
let language = `JavaScript`;
let message = `Let's learn ${language}`;
console.log(message);

// Escape characters
let str1 = "Hello, what's your name? Is it \"Mike\"?";
console.log(str1);
let str2 = 'Hello, What\'s your name? Is it "Mike"?';
console.log(str2);
let str3 = `New \nline.`;
console.log(str3);
let str4 = `I'm counting a backslash:\\!`;
console.log(str4);

// Numbers
let intNr = 1;
console.log(intNr);
let decNr = 1.5;
console.log(decNr);
let expNr = 1.4e15;
console.log(expNr);

// Boolean
let bool1 = true;
console.log(bool1);
let bool2 = false;
console.log(bool2);
let objectIsDeleted = false;
console.log(objectIsDeleted);
let lightIsOn = true;
console.log(lightIsOn);

// Undefined
let unassigned;
console.log(unassigned);

// Null
let empty = null;
console.log(empty);
let unknown = null;
console.log(unknown);

// Typeof
let name = `Iljo`;
console.log(name, typeof name);
let nbr = 35;
console.log(nbr, typeof nbr);
let bool3 = true;
console.log(bool3, typeof bool3);
let undef = undefined;
console.log(undef, typeof undef);
let nothing = null;
console.log(nothing, typeof nothing);

// Converting Data Types
let nr1 = 2;
let nr2 = `2`;
console.log(nr1 * nr2);
let nr3 = 2;
let nr4 = `2`;
console.log(nr3 + nr4);
let newNumber = 6;
newNumber = String(newNumber);
console.log(newNumber, typeof newNumber);
let newNumber1 = `12`;
newNumber1 = Number(newNumber1);
console.log(newNumber1, typeof newNumber1);
let bool4 = `any string will return true`;
bool4 = Boolean(bool4);
console.log(bool4, typeof bool4);
let nullToNr = null;
nullToNr = Number(nullToNr);
console.log(`null`, nullToNr, typeof nullToNr);
let strToNr = ``;
strToNr = Number(strToNr);
console.log(`empty string`, strToNr, typeof strToNr);
let strToNr1 = `hello`;
strToNr1 = Number(strToNr1);
console.log(strToNr1, typeof strToNr1);
let strToBool = `false`;
strToBool = Boolean(strToBool);
console.log(strToBool, typeof strToBool);
let strToBool1 = ``;
strToBool1 = Boolean(strToBool1);
console.log(strToBool1, typeof strToBool1);

let op1 = 2;
let op2 = `2`;
console.log(op1 + Number(op2));
// Vezba
let ex1 = `Laurence`;
console.log(ex1, typeof ex1);
let ex2 = "Svekis";
console.log(ex2, typeof ex2);
let val1 = undefined;
console.log(val1, typeof val1);
let val2 = null;
console.log(val2, typeof val2);
let myNum = 1000;
console.log(myNum, typeof myNum);

// Operators
// Sobiranje
let nr5 = 12;
let nr6 = 14;
let result = nr5 + nr6;
console.log(result);
let str5 = `Hello `;
let str6 = `addition`;
let result1 = str5 + str6;
console.log(result1);
// Vezba
let text = `Hello`;
let name1 = `Iljo,`;
let age = 35;
let bool5 = true;
console.log(text + ` my name is ` + name1 + ` I am ` + age + ` years old and I can code JavaScript:` + bool5);
// Minusiranje
let nr7 = 20;
let nr8 = 4;
let result2 = nr7 - nr8;
let str7 = `Hi`;
let nr9 = 3;
let result3 = str7 - nr9;
console.log(result2, result3);
// Mnozenje
let nb1 = 10;
let nb2 = 5;
let result4 = nb1 * nb2;
let str8 = `Hi`;
let nb3 = 25;
let result5 = str8 * nb3;
console.log(result4, result5);
// Delenje
let nb4 = 30;
let nb5 = 5;
let result6 = nb4 / nb5;
console.log(result6);
// Exponentiation
let nb6 = 2;
let nb7 = 3;
let result7 = nb6 ** nb7;
console.log(result7);
// Modulus
let nb8 = 10;
let nb9 = 3;
let result8 = nb8 % nb9;
console.log(`${nb8} % ${nb9} = ${result8}`);
let br1 = 20;
let br2 = 8;
let result9 = br1 % br2;
console.log(`${br1} % ${br2} = ${result9}`);
let br3 = 125;
let br4 = 60;
let result10 = br3 % br4;
console.log(`${br3} % ${br4} = ${result10}`);
// Unary Operations: Increment and Decrement
let br5 = 4;
br5++;
console.log(br5);
let br6 = 5;
br6--;
console.log(br6);
// Prefix and Postfix Operators
let br7 = 2;
console.log(br7++);
console.log(br7);
let br8 = 2;
console.log(++br8);
let nbr1 = 4;
let nbr2 = 5;
let nbr3 = 2;
console.log(nbr1++ + ++nbr2 * nbr3++);
// Vezba
let num1 = 10;
let num2 = 4;
let result11 = num1 * num2;
console.log(num1 + " * ");
console.log(num1 + " * " + num2);
console.log(num1 + "*" + num2 + "=");
console.log(num1 + " * " + num2 + " = " + result11);
console.log(`${num1}`);
console.log(`${num1}${num2}${num1 * num2}`);
console.log(`${num1} * ${num2} = ${num1 * num2}`);

let num3 = 10;
let num4 = 4;
let result12 = num3 * num4;
console.log(num3 + " * " + num4 + " = " + result12);
console.log(`${num3} * ${num4} = ${result12}`);
let result13 = num3 / num4;
console.log(num3 + " / " + num4 + " = " + result13);
console.log(`${num3} / ${num4} = ${result13}`);
let result14 = num3 % num4;
console.log(num3 + " % " + num4 + " = " + result14);
console.log(`${num3} % ${num4} = ${result14}`);

let incNumber = 0;
++incNumber
console.log(incNumber);


// Assignment operators

let x = 2;
x += 2;
// same as x=x+2
console.log(x);
let y = 2;
y -= 2;
// same as y=y-2
console.log(y);
let a = 6;
a *= 6;
console.log(a);
let b = 3;
b /= 3;
console.log(b);
let f = 2;
f **= 2;
console.log(f);
let g = 3;
g %= 3;
console.log(g);

// Equal
let me = `5`;
let you = `5`;
console.log(me === you);
let me1 = 5;
let you1 = `5`;
console.log(me1 != you1);
let me2 = 5;
let you2 = `5`;
console.log(me2 !== you2);

// Greater than and smaller than
let he = 5;
let she = 6;
let it = 7;
console.log(she > he);
console.log(he > she);
console.log(she > she);
console.log(she >= she);
console.log(he < she);
console.log(he <= she);

// Logical Operators
// And - && - will only return true if both expressions are tru
console.log(it > she && she > he);
console.log(he < she && she > it);
// Or || - if either of the expressions is true
console.log(it > she && she < he);
console.log(he < she && she < it);
// Not ! - negate a Boolean
let mine = false;
console.log(!mine);
let mine1 = true;
console.log(!mine1);
//Vezba
let km = 130;
const conversionRatio = 1.60934;
let miles = km * conversionRatio;
console.log(`The distance of ${km} is equal to ${miles}`);
// Vezba
let height = 187;
const convertToInch = 2.54;
let solution = height * convertToInch;
console.log(`I am tall ${height} cm or to inches that's ${solution} inches`);

let kg = 110;
const convertToPound = 2.2046;
let solution1 = kg * convertToPound;
console.log(`I am weight ${kg} kg or to pounds that's ${solution1} pounds`);

let bmiWeight = 110;
let bmiHeight = 187;
let solution2 = bmiWeight / bmiHeight;
console.log(`My IBM is ${solution2}`);

// Self-Check quiz
let ab = `Hello`;
ab = `world`;
console.log(ab);
let bc = `world`;
let cd = `Hello ${bc}!`;
console.log(cd);
let ac = `Hello`;
ac = prompt(`world`);
console.log(ac);
let de = 5;
let da = 70;
let dc = `5`;
da++;
console.log(da);
let result15 = 3 + 4 * 2 / 8;
console.log(result15);

let firstNum = 5;
let secondNum = 10;
firstNum++;
secondNum--;
let total = ++firstNum + secondNum;
console.log(total);
let total2 = 500 + 100 / 5 + total--;
console.log(total2);

