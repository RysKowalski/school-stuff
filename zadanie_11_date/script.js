d = new Date()
paused = false

const week_day_names = [
  "poniedziałek", "wtorek", "środa", "czwartek", "piątek", "sobota", "niedziela"
]
const month_names = ["stycznia", "lutego", "marca", "kwietnia", "maja", "czerwca", "lipca", "sierpnia", "września", "października", "listopada", "grudnia"]


function generate_time_text() {
  return ("Dzisiaj jest " + get_weekday() + "\nDzisiejsza data: " + get_date() + "\ngodzina: " + get_time())
}

function get_weekday() {
  return week_day_names[d.getDay() - 1]
}

function get_date() {
  return d.getDate() + " " + month_names[d.getMonth()] + " " + d.getFullYear() + " roku"
}

function get_time() {
  return format(d.getHours()) + ":" + format(d.getMinutes()) + ":" + format(d.getSeconds())
}


function format(val) {
  if (val < 10) {
    val = "0" + val
  }
  return val
}

function check_update() {
  if (!paused) {
    update()
  }
}

function update() {
  d = new Date()
  document.getElementById("time").innerText = generate_time_text()
}

document.getElementById("pause-button").onclick = () => {
  paused = true
}
document.getElementById("resume-button").onclick = () => {
  update()
  paused = false
}
document.getElementById("toggle-button").onclick = () => {
  update()
  paused = !paused
}

check_update()
setInterval(check_update, 1000)
