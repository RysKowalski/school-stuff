var d = new Date()

function main() {
  var sec = d.getSeconds()
  var min = d.getMinutes()
  var hour = d.getHours()

  var week_day = d.getDay()
  var day = d.getDate()
  var month = d.getMonth()
  var year = d.getFullYear()

  const week_day_names = {
    1: "poniedziałek", 2: "wtorek", 3: "środa", 4: "czwartek", 5: "piątek", 6: "sobota", 7: "niedziela"
  }
  const month_names = ["stycznia", "lutego", "marca", "kwietnia", "maja", "czerwca", "lipca", "sierpnia", "września", "października", "listopada", "grudnia"]

  // if (week_day == 3) {
  //   week_day = "środa"
  // } else if (week_day == 4) {
  //   week_day = "czwartek"
  // }

  week_day = week_day_names[week_day]

  // switch (month) {
  //   case 0:
  //     month = "stycznia";
  //     break;
  //   case 1:
  //     month = "lutego";
  //     break;
  //   case 9:
  //     month = "października"
  //     break
  //
  //   default:
  //     break;
  // }

  month = month_names[month]

  function fix(val) {
    if (val < 10) {
      val = "0" + val
    }
    return val
  }

  document.write("current hour: " + fix(hour) + ":" + fix(min) + ":" + fix(sec) + "<br>")
  document.write("date: " + day + "/" + month + "/" + year + " weekday: " + week_day)
}

main()
