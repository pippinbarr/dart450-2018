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

  $('#trigger').on('click',function () {

    // This is what we do when it is clicked
    console.log("The trigger was clicked.");

    // Get the FIRST available element of class bullet that does NOT
    // have the class fired
    var $bullet = $('.bullet').not('.fired').first();

    console.log($bullet);
    // Check if we got a bullet back (there might be none!)
    // We can check the length property of the jQuery object returned
    // It will be equal to 0 if there's no bullet selected
    if ($bullet.length == 0) {
      console.log("There was no bullet to fire.");

      // If there's no bullet we will show it by having the trigger
      // briefly say "click!" in a new style
      $('#trigger').text("Click!");
      $('#trigger').addClass('click');

      // Then we will reset the trigger back to normal after a delay
      setTimeout(function () {
        $('#trigger').text("Trigger");
        $('#trigger').removeClass('click');
      },500);
    }
    else {
      // If we're here, there was a bullet to fire!
      console.log("Firing a bullet!");

      // Set the text of the selected bullet to 'Bang!'
      $bullet.text("Bang!");

      // Animate the 'fire' class on so the bullet moves across the screen
      $bullet.addClass('fire',250);

      // Add the fired class to style the bullet and to
      // signal that it has been fired
      $bullet.addClass('fired');
    }
  });

  // We also need to react to clicks on the reload text
  $('#reload').on('click',function () {
    // We'll use a different approach to conditionals here, based on jQuery's
    // ability to CHAIN its functions, including conditionals like last())

    $('.fired') // Select all the elements with class 'fired'
    .last() // Select the LAST one of them (the most recently fired one)
    .text('Bullet') // Set its text back to "Bullet"
    .removeClass('fired') // Remove the class fired (to reset colour)
    .removeClass('fire');
  });

});
