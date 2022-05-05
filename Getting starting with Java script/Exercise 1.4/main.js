

//console.log("Ilija Trajkovski");

// Global variable
let lname = "Trajkovski";
let age = 23;
// Global const variable
const height = 180;

function FirstName(firstname) { // start of block scope
  // Local Variable
  let fname = firstname;
  /*
  This fucntion is concatinating two 
  strings with empty space between. 
  */
  console.log(fname + " " + lname);
} // end of blog scope

function LastName() {
  /*
  This fuction is showing
  only the last name into 
  the console.
  */
  console.log(lname);

}

function bio() {
  //local variable
  let fname = Ilija;

  age++;

  // height++;

  console.log(fname + " " + lname + "- Age:" + age + "- height:" + height);
}

// This line of code is calling the first funtion.
FirstName("Ilija");
// This line of code is calling the second funtion.
LastName();

bio();
bio();