memory = ""



function cls() {
  document.getElementById("expression").value = ""
  document.getElementById("result").value = ""
}

document.getElementById("cls").addEventListener("click", cls)

function insert(text) {
  document.getElementById("expression").value += text
  document.getElementById("no-keyboard-info").style.display = 'none'
}

function memory_set() {
  memory = document.getElementById("result").value
}

function decrease_memory() {
  memory = parseFloat(memory) - document.getElementById("result").value
}

function calculate() {
  exp = document.getElementById("expression").value
  document.getElementById("result").value = eval(exp)
}

document.getElementById("equals").addEventListener("click", calculate)

function block_user_input(event) {
  document.getElementById("no-keyboard-info").style.display = 'block'
  event.preventDefault();
}

document.getElementById("expression").addEventListener("keydown", (e) => block_user_input(e))
document.getElementById("enter-character").addEventListener("keydown", (e) => block_user_input(e))

