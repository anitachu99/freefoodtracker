$("#menu").click(function() {
  console.log("menu is clicked")
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

function DeleteButton(post_key){
  alert(post_key)
}
