/*

DART450
Six Shooter

On click, we change the text 'Bullet' to 'Bang!', make it red,
and animate it quickly across the screen. Like a bullet!

*/

// We use "document ready" so that our code only runs once the whole
// webpage is loaded and ready.

$(document).ready(function() {

  // We use the jQuery .click() function to "listen" for clicks on our
  // divs with class "bullet". Note this selects ALL the divs with this
  // class and applies the click event to ALL of them.

  $('.bullet').on('click',function () {

    // This is what we do when it is clicked
    console.log("A bullet was clicked.");

    // Inside the event handler function 'this' refers to the thing that got clicked
    // So we can SELECT 'this' with jQuery to apply function ONLY to the actual
    // bullet div that was clicked.

    // Set the text of the clicked div to 'Bang!'
    $(this).text("Bang!");
    // Change the color of its texts to red
    $(this).css({color: 'red'});
    // Animate the div off the screen to the right
    // This moves its 'left' property to 2000px in 250 milliseconds
    // Note: animating 'top' and 'left' only works if 'position' is relative or absolute
    $(this).animate({left: 2000},250);
  });

});
