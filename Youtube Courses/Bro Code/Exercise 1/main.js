
/* Variables
Two steps:
1.Declaration (var, let, const)
2.Assigment (= assigment operator)
*/
let firstName = `Iljo`; // string
let age = 35; // number
let student = true; // boolean
console.log(`Yoa are`, age, `years old`);
console.log(`Hello`, firstName);
console.log(student);

let students = 20;
students = students + 1;
students += 1;
console.log(students);
let extraStudents = students % 3;
console.log(extraStudents);

// How to accept user input
let userName = prompt(`What is your name`);
console.log(userName);

// Type Conversion
let years = prompt(`How old are you?`);
console.log(years);
years = Number(years);
console.log(typeof years);
years += 1;
console.log(`Happy Birthday! You are`, years, `years old`);
// do 30. min