$(document).ready(function () {
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October",
    "November", "December"
  ];
  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  function dateFunc() {
    var currentDate = new Date();
    currentMonth = months[currentDate.getMonth()];
    currentDay = currentDate.getDate();
    currentWeekDay = days[currentDate.getDay()];

    function ordinalCheck() {
      var currentDayString = currentDay.toString();

      if (currentDayString.endsWith(1)) {
        currentDay += "ST";
      } else if (currentDayString.endsWith(2)) {
        currentDay += "ND";
      } else if (currentDayString.endsWith(3)) {
        currentDay += "RD";
      } else {
        currentDay += "TH";
      }
    }
    ordinalCheck();
    document.getElementById("date").innerHTML = currentWeekDay + ", " + currentMonth + " " + currentDay;
    setTimeout(function () {
      dateFunc();
    }, 60000);
  }
  dateFunc();

  function runTimefunc() {
    function checkTime(i) {
      return (i < 10) ? "0" + i : i;
    }

    function timeFunc() {
      var currentTime = new Date();
      currentHour = checkTime(currentTime.getHours());
      currentMin = checkTime(currentTime.getMinutes());
      document.getElementById("time").innerHTML = currentHour + ":" + currentMin;
      setTimeout(function () {
        timeFunc()
      }, 500);
    }
    timeFunc();
  }
  runTimefunc();
});