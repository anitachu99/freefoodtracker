// function w3_open() {
//   document.getElementById("main").style.marginLeft = "25%";
//   document.getElementById("mySideBar").style.width = "25%";
//   document.getElementById("mySideBar").style.display = "block";
//   document.getElementById("openNav").style.display = 'none';
// }
// function w3_close() {
//   document.getElementById("main").style.marginLeft = "0%";
//   document.getElementById("mySideBar").style.display = "none";
//   document.getElementById("openNav").style.display = "inline-block";
// }

$("#menu").click(function() {
  console.log("menu is clicked")
  testTrue();
});

$("#create_post").click(function() {
  console.log("hello, this is the empty function")
  empty();

});

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

function empty() {
    var personname = $('#personname').val();
    var food_type = $('#food_type').val();
    var location = $('#location').val();
    var date = $('#date').val();
    var time_begin = $('#time_begin').val();
    var time_end = $('#time_end').val();

    if (personname == "") {
      event.preventDefault();
      alert("Please enter your name");
    } else if (food_type == "") {
      event.preventDefault();
      alert("Please enter the food type");
    } else if (location == "") {
      event.preventDefault();
      alert("Please enter the location");
    } else if (date == "") {
      event.preventDefault();
      alert("Please enter the date");
    } else if (time_begin == "") {
      event.preventDefault();
      alert("Please enter the time the event starts");
    } else if (time_end == "") {
      event.preventDefault();
      alert("Please enter the time the event starts");
    };

}
