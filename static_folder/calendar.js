
$( "#menu" ).click(function() {
  testTrue();
});

$('#jan').click(function() {
  $('#monthy').empty();
  $('#monthy').append("January");
  $('.days').empty();
  var year = "2017";
  var month = "1";
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
})

$('#feb').click(function() {
  $('#monthy').empty();
  $('#monthy').append("February");
  $('.days').empty();
  var year = "2017";
  var month = "2";
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
})

$('#mar').click(function() {
  $('#monthy').empty();
  $('#monthy').append("March");
  $('.days').empty();
  var year = "2017";
  var month = "3";
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
})

$('#apr').click(function() {
  $('#monthy').empty();
  $('#monthy').append("April");
  $('.days').empty();
  var year = "2017";
  var month = "4";
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
})

$('#may').click(function() {
  $('#monthy').empty();
  $('#monthy').append("May");
  $('.days').empty();
  var year = "2017";
  var month = "5";
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
})

$('#jun').click(function() {
  $('#monthy').empty();
  $('#monthy').append("June");
  $('.days').empty();
  var year = "2017";
  var month = "6";
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
})

$('#jul').click(function() {
  $('#monthy').empty();
  $('#monthy').append("July");
  $('.days').empty();
  var year = "2017";
  var month = "7";
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
})

$('#aug').click(function() {
  $('#monthy').empty();
  $('#monthy').append("August");;
  $('.days').empty();
  var year = "2017";
  var month = "8";
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
})

$('#sep').click(function() {
  $('#monthy').empty();
  $('#monthy').append("September");
  $('.days').empty();
  var year = "2017";
  var month = "9";
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
})



function putDaysIn(numdays) {
  for (i=1;i<numdays+1;i++) {
    $('.days').append("<li>"+i+"</li>");
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
