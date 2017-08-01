var data = {
    'personname' : personname,
    'food_type' : food_type,
    'breed' : breed,
    'age' : age,
  };


var settings = {
    'method': 'POST', //call the post function in mainhandler
    'data': data, //send the user input to the server
    'success': renderUserInfo,
  };


function setup() {
  $('#submit').click(saveFoodInfo)
}


$(document).ready(setup)
