/*

DART450
Animate on keypress

Each time a key is pressed in the input field we animate its
'top' position downward so it moves on the page!

*/

// We use "document ready" so that our code only runs once the whole
// webpage is loaded and ready.

$(document).ready(function() {

  // We use the jQuery .click() function to "listen" for clicks on our
  // div with id "text"

  $('#inputfield').keypress(function (event) {

    // This is what we do when a key is typed

    // Inside the function "this" refers to the thing that got clicked
    // And we use .animate() to animate our input box (which has position
    // aboslute) down the page using its "top" property
    $(this).animate({
      top: "+=20px"
    },10);
    // Note/remember that jQuery's .animate() can use "+=" and "-=" to
    // change a property by an amount, rather than just to a specified
    // number

    // What is the "event" parameter there for in our keypress handler?
    console.log(event);

    // Did you know you can check which key was pressed with event.which?
    // console.log(event.which);

    // But it comes back as a number... but we can convert it to find out
    // which character was pressed:
    // console.log(String.fromCharCode(event.which));

  });

});
