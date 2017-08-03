
$( "#menu" ).click(function() {
  testTrue();
});


$('#jan').click(function() {
  $('#monthy').empty();
  $('#monthy').append("January");
  $('.days').empty();
  var year = "2017";
  var month = "01";
  var day = new Date(year + "-" + month + "-01").getDay()
  var numdays = daysInMonth(month, year)
  if (day==0) {
    putDaysIn(numdays);
  } else if (day==1) {
    $('.days').append("<li></li>");
    putDaysIn(numdays);
  } else if (day==2) {
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    putDaysIn(numdays);
  } else if (day==3) {
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    putDaysIn(numdays);
  } else if (day==4) {
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    putDaysIn(numdays);
  } else if (day==5) {
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    putDaysIn(numdays);
  } else if (day==6) {
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    putDaysIn(numdays);
  }
  getEventsByMonth(month)
})

$('#feb').click(function() {
  $('#monthy').empty();
  $('#monthy').append("February");
  $('.days').empty();
  var year = "2017";
  var month = "02";
  var day = new Date(year + "-" + month + "-01").getDay()
  var numdays = daysInMonth(month, year)
  if (day==0) {
    putDaysIn(numdays);
  } else if (day==1) {
    $('.days').append("<li></li>");
    putDaysIn(numdays);
  } else if (day==2) {
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    putDaysIn(numdays);
  } else if (day==3) {
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    putDaysIn(numdays);
  } else if (day==4) {
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    putDaysIn(numdays);
  } else if (day==5) {
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    putDaysIn(numdays);
  } else if (day==6) {
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    putDaysIn(numdays);
  }
  getEventsByMonth(month)
})

$('#mar').click(function() {
  $('#monthy').empty();
  $('#monthy').append("March");
  $('.days').empty();
  var year = "2017";
  var month = "03";
  var day = new Date(year + "-" + month + "-01").getDay()
  var numdays = daysInMonth(month, year)
  if (day==0) {
    putDaysIn(numdays);
  } else if (day==1) {
    $('.days').append("<li></li>");
    putDaysIn(numdays);
  } else if (day==2) {
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    putDaysIn(numdays);
  } else if (day==3) {
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    putDaysIn(numdays);
  } else if (day==4) {
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    putDaysIn(numdays);
  } else if (day==5) {
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    putDaysIn(numdays);
  } else if (day==6) {
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    putDaysIn(numdays);
  }
  getEventsByMonth(month)
})

$('#apr').click(function() {
  $('#monthy').empty();
  $('#monthy').append("April");
  $('.days').empty();
  var year = "2017";
  var month = "04";
  var day = new Date(year + "-" + month + "-01").getDay()
  var numdays = daysInMonth(month, year)
  if (day==0) {
    putDaysIn(numdays);
  } else if (day==1) {
    $('.days').append("<li></li>");
    putDaysIn(numdays);
  } else if (day==2) {
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    putDaysIn(numdays);
  } else if (day==3) {
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    putDaysIn(numdays);
  } else if (day==4) {
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    putDaysIn(numdays);
  } else if (day==5) {
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    putDaysIn(numdays);
  } else if (day==6) {
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    putDaysIn(numdays);
  }
  getEventsByMonth(month)
})

$('#may').click(function() {
  $('#monthy').empty();
  $('#monthy').append("May");
  $('.days').empty();
  var year = "2017";
  var month = "05";
  var day = new Date(year + "-" + month + "-01").getDay()
  var numdays = daysInMonth(month, year)
  if (day==0) {
    putDaysIn(numdays);
  } else if (day==1) {
    $('.days').append("<li></li>");
    putDaysIn(numdays);
  } else if (day==2) {
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    putDaysIn(numdays);
  } else if (day==3) {
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    putDaysIn(numdays);
  } else if (day==4) {
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    putDaysIn(numdays);
  } else if (day==5) {
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    putDaysIn(numdays);
  } else if (day==6) {
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    putDaysIn(numdays);
  }
  getEventsByMonth(month)
})

$('#jun').click(function() {
  $('#monthy').empty();
  $('#monthy').append("June");
  $('.days').empty();
  var year = "2017";
  var month = "06";
  var day = new Date(year + "-" + month + "-01").getDay()
  var numdays = daysInMonth(month, year)
  if (day==0) {
    putDaysIn(numdays);
  } else if (day==1) {
    $('.days').append("<li></li>");
    putDaysIn(numdays);
  } else if (day==2) {
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    putDaysIn(numdays);
  } else if (day==3) {
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    putDaysIn(numdays);
  } else if (day==4) {
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    putDaysIn(numdays);
  } else if (day==5) {
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    putDaysIn(numdays);
  } else if (day==6) {
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    putDaysIn(numdays);
  }
  getEventsByMonth(month)
})

$('#jul').click(function() {
  $('#monthy').empty();
  $('#monthy').append("July");
  $('.days').empty();
  var year = "2017";
  var month = "07";
  var day = new Date(year + "-" + month + "-01").getDay()
  var numdays = daysInMonth(month, year)
  if (day==0) {
    putDaysIn(numdays);
  } else if (day==1) {
    $('.days').append("<li></li>");
    putDaysIn(numdays);
  } else if (day==2) {
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    putDaysIn(numdays);
  } else if (day==3) {
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    putDaysIn(numdays);
  } else if (day==4) {
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    putDaysIn(numdays);
  } else if (day==5) {
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    putDaysIn(numdays);
  } else if (day==6) {
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    putDaysIn(numdays);
  }
  getEventsByMonth(month)
})

$('#aug').click(function() {
  $('#monthy').empty();
  $('#monthy').append("August");;
  $('.days').empty();
  var year = "2017";
  var month = "08";
  var day = new Date(year + "-" + month + "-01").getDay()
  var numdays = daysInMonth(month, year)
  if (day==0) {
    putDaysIn(numdays);
  } else if (day==1) {
    $('.days').append("<li></li>");
    putDaysIn(numdays);
  } else if (day==2) {
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    putDaysIn(numdays);
  } else if (day==3) {
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    putDaysIn(numdays);
  } else if (day==4) {
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    putDaysIn(numdays);
  } else if (day==5) {
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    putDaysIn(numdays);
  } else if (day==6) {
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    putDaysIn(numdays);
  }
  getEventsByMonth(month)
})

$('#sep').click(function() {
  $('#monthy').empty();
  $('#monthy').append("September");
  $('.days').empty();
  var year = "2017";
  var month = "09";
  var day = new Date(year + "-" + month + "-01").getDay()
  var numdays = daysInMonth(month, year)
  if (day==0) {
    putDaysIn(numdays);
  } else if (day==1) {
    $('.days').append("<li></li>");
    putDaysIn(numdays);
  } else if (day==2) {
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    putDaysIn(numdays);
  } else if (day==3) {
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    putDaysIn(numdays);
  } else if (day==4) {
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    putDaysIn(numdays);
  } else if (day==5) {
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    putDaysIn(numdays);
  } else if (day==6) {
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    putDaysIn(numdays);
  }
  getEventsByMonth(month)
})

$('#oct').click(function() {
  $('#monthy').empty();
  $('#monthy').append("October");
  $('.days').empty();
  var year = "2017";
  var month = "10";
  var day = new Date(year + "-" + month + "-01").getDay()
  var numdays = daysInMonth(month, year)
  if (day==0) {
    putDaysIn(numdays);
  } else if (day==1) {
    $('.days').append("<li></li>");
    putDaysIn(numdays);
  } else if (day==2) {
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    putDaysIn(numdays);
  } else if (day==3) {
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    putDaysIn(numdays);
  } else if (day==4) {
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    putDaysIn(numdays);
  } else if (day==5) {
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    putDaysIn(numdays);
  } else if (day==6) {
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    putDaysIn(numdays);
  }
  getEventsByMonth(month)
})

$('#nov').click(function() {
  $('#monthy').empty();
  $('#monthy').append("November");
  $('.days').empty();
  var year = "2017";
  var month = "11";
  var day = new Date(year + "-" + month + "-01").getDay()
  var numdays = daysInMonth(month, year)
  if (day==0) {
    putDaysIn(numdays);
  } else if (day==1) {
    $('.days').append("<li></li>");
    putDaysIn(numdays);
  } else if (day==2) {
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    putDaysIn(numdays);
  } else if (day==3) {
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    putDaysIn(numdays);
  } else if (day==4) {
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    putDaysIn(numdays);
  } else if (day==5) {
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    putDaysIn(numdays);
  } else if (day==6) {
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    putDaysIn(numdays);
  }
  getEventsByMonth(month)
})

$('#dec').click(function() {
  $('#monthy').empty();
  $('#monthy').append("December");
  $('.days').empty();
  var year = "2017";
  var month = "12";
  var day = new Date(year + "-" + month + "-01").getDay()
  var numdays = daysInMonth(month, year)
  if (day==0) {
    putDaysIn(numdays);
  } else if (day==1) {
    $('.days').append("<li></li>");
    putDaysIn(numdays);
  } else if (day==2) {
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    putDaysIn(numdays);
  } else if (day==3) {
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    putDaysIn(numdays);
  } else if (day==4) {
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    putDaysIn(numdays);
  } else if (day==5) {
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    putDaysIn(numdays);
  } else if (day==6) {
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    $('.days').append("<li></li>");
    putDaysIn(numdays);
  }
  getEventsByMonth(month)
})

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

function putDaysIn(numdays) {
  for (i=1;i<numdays+1;i++) {
    $('.days').append("<li id="+i+">"+i+"</li>");
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
