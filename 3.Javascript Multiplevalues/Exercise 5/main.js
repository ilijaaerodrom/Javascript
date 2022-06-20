
let company = {
  companyName: "Healthy Candy",
  activities: [`food manufacturing`,
    `improving kids'health`, `manufacturing`],
  address: {
    street: "2nd street",
    number: "123",
    zipcode: "33116",
    city: "Miamy",
    state: "Florida",
  },
  yearOfEstablishment: 2021
};
company.address.zipcode = `33117`;
console.log(company.address.zipcode);
company[`address`][`number`] = `100`;
console.log(company[`address`][`number`]);
let activity = company.activities[1];
console.log(activity);


let people = {
  friends: [],
};

let Bobi = {
  firstName: `Ilija`,
  lastName: `Trajkovski`,
  idValue: 50,
}
let Miki = {
  firstName: `Mishko`,
  lastName: `Peshic`,
  idValue: 30,
}
let Bojan = {
  firstName: `Bojco`,
  lastName: `Popovski`,
  idValue: 20,
}
people.friends.push(`Bobi`);
console.log(Bobi);
people.friends.push(`Miki`);
console.log(Miki);
people.friends.push(`Bojan`);
console.log(Bojan);