/**********************************************

DART 450, Winter 2018
Name Rememberer
Pippin Barr

Allows the user to type their name into an input and then
have the page remember their name from then on, even when
they leave and come back...

**********************************************/

$(document).ready(function () {

  // First we fetch the saved name if there is one
  var userName = localStorage.getItem('userName');

  // Then we have to check if there was anything really there
  // with an if-statement (which we will learn more about next week!)
  if (userName == null) {
    // IF the saved username was null, there was nothing there
    // So we need to welcome them with a name.
    $('#welcomeMessage').text('Welcome.');
  }
  else {
    // ELSE the saved username wasn't null, so there was a name there
    // We can welcome them with their name
    $('#welcomeMessage').text('Welcome, ' + userName);
  }

  // In order to collect the user's name we listen for a click
  // on the name input button
  $('#submitName').on('click', function() {
    // When they click, we save the value in th einput field into a variable
    var inputName = $('#nameInput').val();
    // Then we save the value of that variable to local storage for later
    localStorage.setItem('userName',inputName);
    // And we update the welcome message to reflect their name
    $('#welcomeMessage').text('Welcome, ' + inputName);
  });


});
