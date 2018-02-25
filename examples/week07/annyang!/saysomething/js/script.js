/*

Say Something

Fun with Annyang!

*/

var gameOver = false;

$(document).ready(function() {


  if (annyang) {

    var command = {

      // We want to just pick up each individual word
      // the user says, because we want to check if
      // they said the right thing. Thus we call said()
      // each time with the word they said as its argument.

      // In annyang's commands writing a colon immediately
      // followed by a variable name means it will call
      // the function specified with that word in an argument
      ':word': said

    };

    // Now we've defined the command we give it to annyang
    // by using its .addCommands() function.
    annyang.addCommands(command);

    // Finally we tell annyang to start listening with its
    // .start() function
    annyang.start();
  }

});


// said (word)
//
// Called when annyang detects the user said a word. The argument
// will contain the word annyang heard.
function said(word) {
  // First make sure the "game" isn't already over
  if (gameOver) {
    return;
  }

  // Check if they said the correct answer to our devious riddle...
  if (word == 'something') {
    // If they said 'something', they got it right, make the
    // page green.
    $('body').css({
      'background-color': 'green'
    });
  }
  else {
    // If they didn't say 'something', they got it wrong, make
    // the page red
    $('body').css({
      'background-color': 'red'
    })
  }

  // For good measure, add what they said to the page
  $('#command').text('"' + word + '."');

  gameOver = true;
}
