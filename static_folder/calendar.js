
$( "#menu" ).click(function() {
  testTrue();
});


$('#jan').click(function() {
  $('#monthy').empty();
  $('#monthy').append("January");
  $('.weeks').empty();
  var year = "2017";
  var month = "01";
  appendCalendarDays(year, month);
})

$('#feb').click(function() {
  $('#monthy').empty();
  $('#monthy').append("February");
  $('.weeks').empty();
  var year = "2017";
  var month = "02";
  appendCalendarDays(year, month);
})

$('#mar').click(function() {
  $('#monthy').empty();
  $('#monthy').append("March");
  $('.weeks').empty();
  var year = "2017";
  var month = "03";
  appendCalendarDays(year, month);
})

$('#apr').click(function() {
  $('#monthy').empty();
  $('#monthy').append("April");
  $('.weeks').empty();
  var year = "2017";
  var month = "04";
  appendCalendarDays(year, month);
})

$('#may').click(function() {
  $('#monthy').empty();
  $('#monthy').append("May");
  $('.weeks').empty();
  var year = "2017";
  var month = "05";
  appendCalendarDays(year, month);
})

$('#jun').click(function() {
  $('#monthy').empty();
  $('#monthy').append("June");
  $('.weeks').empty();
  var year = "2017";
  var month = "06";
  appendCalendarDays(year, month);
})

$('#jul').click(function() {
  $('#monthy').empty();
  $('#monthy').append("July");
  $('.weeks').empty();
  var year = "2017";
  var month = "07";
  appendCalendarDays(year, month);
})

$('#aug').click(function() {
  $('#monthy').empty();
  $('#monthy').append("August");;
  $('.weeks').empty();
  var year = "2017";
  var month = "08";
  appendCalendarDays(year, month);
})

$('#sep').click(function() {
  $('#monthy').empty();
  $('#monthy').append("September");
  $('.weeks').empty();
  var year = "2017";
  var month = "09";
  appendCalendarDays(year, month);
})

$('#oct').click(function() {
  $('#monthy').empty();
  $('#monthy').append("October");
  $('.weeks').empty();
  var year = "2017";
  var month = "10";
  appendCalendarDays(year, month);
})

$('#nov').click(function() {
  $('#monthy').empty();
  $('#monthy').append("November");
  $('.weeks').empty();
  var year = "2017";
  var month = "11";
  appendCalendarDays(year, month);
})

$('#dec').click(function() {
  $('#monthy').empty();
  $('#monthy').append("December");
  $('.weeks').empty();
  var year = "2017";
  var month = "12";
  appendCalendarDays(year, month);
})

function appendCalendarDays(year, month) {
  var count=0;
  var day = new Date(year + "-" + month + "-02").getDay()
  console.log(day);
  var numdays = daysInMonth(month, year)
  for (i=0; i<day; i++) {
    $('#week1').append("<td></td>");
    count++
  }
  putDaysIn(numdays, count);
  getEventsByMonth(month)
}

function getEventsByMonth(month) {
  var url = '/getevents'
  var data = {};
  data["month"] = month;

  var settings = {
  'method': 'GET', //call the get function in mainhandler
  'data': data, //send the user input to the server
  'success': renderEventInfo,
};

$.ajax(url, settings);

}

function renderEventInfo(eventsjson) {
  var eventslist = JSON.parse(eventsjson)
  console.log(eventslist)
}

function putDaysIn(numdays, count) {
  console.log("before the for loop");
  var currentweek = $('#week1');
  for (i=1;i<numdays+1;i++) {
    if ((count+i)%7 == 1) {
      currentweek = currentweek.next();
      console.log("added a new row");
    }
    currentweek.append("<td id="+i+">"+i+"</td>");

  }
}

function daysInMonth(month,year) {
    return new Date(year, month, 0).getDate();
}

var open=false;

function openNav() {
    document.getElementById("mySideBar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    open=true;
}

function closeNav() {
    document.getElementById("mySideBar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    open=false;
}

function testTrue(){
    if (open == true){
      closeNav();
    }
    else if (open == false){
      openNav();
    }
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
