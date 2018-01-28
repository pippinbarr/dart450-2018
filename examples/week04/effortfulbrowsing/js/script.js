/*

Effortful Browsing
Pippin Barr

This code checks whether the user is hitting keys rapidly
and adjusts the opacity of an overlay hiding the content
on the page based on how rapidly they type.

*/

$(document).ready(function() {
  // Set the starting opacity for the overlay, default is 1
  // The range is 0 to 1
  var opacity = 1;
  // Set an interval at which the opacity changes
  var interval = 100;
  // Set the amount opacity should decrease when a key is pressed
  var opacityDecrease = 0.1;
  // Set the amount opacity should increase each interval
  var opacityIncrease = 0.15;

  // We need to "hear" when the user types on their keyboard
  // so we can tell they are making an effort to see the content
  // so we use jQuery's .keypress().
  // We'll use it on 'body' so it hears all keypresses.
  $('body').keypress(function () {
    // If the user typed a key, we reduce the opacity.
    // Note that we COULD literally set the opacity of the overlay
    // right here, but we're doing it with a variable because it's
    // cleaner
    opacity = opacity - opacityDecrease;
    // Could also write this as:
    // opacity -= opacityDecrease;

    // Make sure opacity doesn't become a negative number
    if (opacity < 0) {
      // If opacity had become negative, set it back to 0
      opacity = 0;
    }
  });

  // In order to animate the opacity changing, we will use
  // setInterval to run code at a set interval!
  setInterval(function () {

    // The first thing we do is increase the opacity because
    // its default behaviour is to become opaque
    opacity = opacity + opacityIncrease;
    // Could write:
    // opacity += opacityIncrease;

    // Make sure the opacity doesn't go above 1 in the same
    // way we made sure it didn't go below 0
    if (opacity > 1) {
      opacity = 1;
    }

    // Now we need to create a string to set the background color
    // of our overlay with the appropriate alpha value
    //
    // You can do "addition" with strings of text, where the + means
    // that you turn the two strings into one string joined together.
    // We can use that to create the "rgba(red,green,blue,alpha)"
    // format that CSS expects for a color.
    //
    // Importantly, we can use our VARIABLE opacity as part of the
    // string we're making up to allow it to set the alpha as follows:
    var backgroundColor = "rgba(255,255,255," + opacity + ")"
    // If opacity is, say 0.8, backgroundColor will be set to
    // "rgba(255,255,255,0.8)"

    // Finally we need to set the actual CSS property of the overlay
    // div with our new background colour...
    $('#overlay').css({
      "background-color": backgroundColor
    });
  },interval);
});
