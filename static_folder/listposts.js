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

$( "#menu" ).click(function() {
  testTrue();
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
$(document).ready(setup)
