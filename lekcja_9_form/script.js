
function add() {
  var form = document.getElementById("add-form")
  var v1 = form.l1.value
  var v2 = form.l2.value

  var sum = parseFloat(v1) + parseFloat(v2)

  document.getElementById("result").setHTMLUnsafe(sum)

  return false
}
