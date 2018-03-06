/*

Hide and Seek
Pippin Barr

A page with a hidden circle that you have to find through sound cues
based on mouse movement.

*/

// The location of the secret circle
var secretLocation = {
  x: 0,
  y: 0
};

// The actual secret element
var $secret;



$(document).ready(function() {

  // Set up our drums
  setupDrums();

  // Choose a random position for our secret element
  secretLocation.x = Math.random() * $(window).width();
  secretLocation.y = Math.random() * $(window).height();

  // Create the secret element (a div)
  $secret = $('<div></div>');

  // Set up its CSS to make it a small green circle at our
  // secret location
  $secret.css({
    opacity: 0,
    width: 50,
    height: 50,
    backgroundColor: 'green',
    position: 'absolute',
    top: secretLocation.y,
    left: secretLocation.x,
    borderRadius: '50%'
  });

  // Add the secret element to the page
  $('body').append($secret);

  // When the mouse moves, update the rate of the drums we're playing
  $(document).on('mousemove',handleMouseMove);

});


// setupDrums ()
//
// Sets up a random drum loop
function setupDrums () {

  // Initialise Gibber
  Gibber.init();

  // Create our drums loop, at 1/8 note length
  var drums = EDrums('x.o.x*o.x.oxx-o.',1/8);

  // Set the clock rate of the drums to 0 so they don't play until you start moving
  Clock.rate = 0;
}


// handleMouseMove (event)
//
// When the mouse moves we calculate its distance from the secret
// element and adjust the drum tempo
function handleMouseMove (event) {

  // Get the location of the mouse
  var mouseX = event.pageX;
  var mouseY = event.pageY;

  // Get the x distance between the mouse and the secret
  var dx = mouseX - secretLocation.x;
  // Get the y distance between the mouse and the secret
  var dy = mouseY - secretLocation.y;

  // Use ancient Greek mathematics to calculate the distance
  var distance = Math.sqrt(Math.pow(dx,2) + Math.pow(dy,2));

  // Set the clock rate based on the distance from the secret
  // Closer = faster!
  Clock.rate = 250/distance;

  // Check if the player has found the secret by seeing if the mouse
  // is inside the circle
  if (distance < $secret.width()/2) {
    // If so, animate the secret to be visible
    $secret.animate({
      opacity: 1
    },1000);

    // Stop listening for mousemoved because the game is over
    $(document).unbind('mousemove');

    // Add a bass line for a feeling of success
    var bassSynth = Mono('bass').note.seq( [0,7], 1/8 )

    // Go back to the standard clock rate
    Clock.rate = 1;
  }

};
