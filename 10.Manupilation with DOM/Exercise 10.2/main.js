

console.log(document.getElementById(`list`));
console.log(document.getElementById(`someText`));
console.log(document.getElementById(`anoText`));

let myList = ["Bananas", "Apples", "Milk", "Chocolate"];
document.getElementById("list").innerHTML = "";
myList.forEach(element => {
  document.getElementById("list")
    .innerHTML += "<li>" + element + "</li>";
});