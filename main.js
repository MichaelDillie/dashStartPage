$(document).ready(function () {
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October",
    "November", "December"
  ];
  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  var currentdate = new Date();
  var currentMont = months[currentdate.getMonth()];
  var currentDay = currentdate.getDate();
  var currentWeekDay = days[currentdate.getDay()];
  var date = currentWeekDay + ", " + currentMont + " " + currentDay;
  console.log(date);

  var currentHour = currentdate.getHours();
  var currentMin = currentdate.getMinutes();
  var time = currentHour + ":" + currentMin;
  console.log(time);

  var dateDiv = $("#date");
  var timeDiv = $("#time");

  function test() {
    dateDiv.text(date);
    timeDiv.text(time);
  }
  test();
});