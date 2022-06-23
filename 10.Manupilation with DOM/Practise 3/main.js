
function stop() {
  prompt(`Ouch! Stop it`);
}

document.getElementById(`three`).onclick = function () {
  confirm(`Ouch! Stop it`);
}

function reveal(params) {
  console.log(params.textContent);
  params.textContent = `I am clicked`;
  params.style = `color: white; background: green`;
}