/*

Basic Annyang!

Using Annyang to manipulate some HTML and CSS

*/

$(document).ready(function() {

  // As per the sample code, the first thing suggested is that you
  // check if "annyang" exists before you start trying to use it.
  // This is a good thing to do and will gracefully avoid an error
  // if something went wrong an annyang isn't available...
  if (annyang) {
    console.log("annyang is available.");
    // We define the set of commands our page will listen for
    // as a javascript object that has property names that
    // represent the commands and property values that give
    // a function to call when the command is heard...
    var commands = {
      // If annyang hears "red" it will call makeDivsRed()
      'red': makeDivsRed,
      // If annyang hears "green" it will call makeDivsGreen()
      'green': makeDivsGreen,
      // If annyang hears "more" it will call addDiv()
      'more': addDiv
    };

    // Now we've defined the commands we give them to annyang
    // by using its .addCommands() function.
    annyang.addCommands(commands);

    // Finally we tell annyang to start listening with its
    // .start() function
    annyang.start();

    // Note that this requires that the user of our page agrees
    // to allow the page to listen to the microphone!
    // At least on some browsers this means the page will need
    // to be hosted at an HTTPS address. Fortunately, GitHub
    // Pages automatically uses HTTPS.
  }

});

// makeDivsRed
//
// Called on command 'red', just sets the CSS appropriately.
function makeDivsRed () {
  console.log("red");
  $('.square').css({
    'background-color': 'red'
  })
}

// makeDivsGreen
//
// Called on command 'green', just sets the CSS appropriately.
function makeDivsGreen () {
  $('.square').css({
    'background-color': 'green'
  })
}

// makeDivsRed
//
// Called on command 'add', just appends a new div to the page.
function addDiv () {
  var newDiv = $('<div class="square"></div>');
  $('body').append(newDiv);
}
