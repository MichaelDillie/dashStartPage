// var weather = require('weather-js');
$(document).ready(function () {

  // ************************** UNDER TESTING **************************

  // var keys = require("./keys.js");
  // var key = keys.darkSkyKey.apiKey

  // function test() {
  //   if ("geolocation" in navigator) {
  //     /* geolocation is available */
  //     navigator.geolocation.getCurrentPosition(function(position) {
  //       var lat = position.coords.latitude;
  //       var lon = position.coords.longitude;
  //       weatherFunc(lat, lon);
  //     });
  //   } else {
  //     /* geolocation IS NOT available */
  //     console.log("NO");
  //   }
  // }
  // test();
  // function weatherFunc(lat, lon) {
  //   var queryURL = "https://api.darksky.net/forecast/" + key + "/" + lat + "," + lon;
  //   $.ajax({
  //     url: queryURL,
  //     method: "GET"
  // }).then(function (response) {
  //   console.log("THIS IS THEN");
  // });
  // }

  // *******************************************************************

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
        currentDay += "<span id='ordinal'>ST</span>";
      } else if (currentDayString.endsWith(2)) {
        currentDay += "<span id='ordinal'>ND</span>";
      } else if (currentDayString.endsWith(3)) {
        currentDay += "<span id='ordinal'>RD</span>";
      } else {
        currentDay += "<span id='ordinal'>TH</span>";
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
      timePeriod = "AM";
      currentHour12 = currentHour;
      if (currentHour12 >= 12) {
        currentHour12 = currentHour - 12;
        timePeriod = "PM";
      }
      if (currentHour12 == 0) {
        currentHour12 = 12;
      }
      document.getElementById("time").innerHTML = currentHour12 + ":" + currentMin + " " + timePeriod;
      setTimeout(function () {
        timeFunc()
      }, 500);
    }
    timeFunc();
  }
  runTimefunc();

});