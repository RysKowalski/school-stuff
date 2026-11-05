memory = ""



function cls() {
  document.getElementById("expression").value = ""
  document.getElementById("result").value = ""
}

function insert(text) {
  document.getElementById("expression").value += text
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
