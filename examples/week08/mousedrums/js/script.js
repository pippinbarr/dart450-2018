/*

Mouse Drums
Pippin Barr

Plays some jazzy drums when the mouse moves
(based on how fast it moves)

Uses:

Gibber.lib
http://charlie-roberts.com/gibber/gibber-lib-js/

*/

// Keep track of the mouse's locations
var mouse = {
  x: 0, // current x
  y: 0, // current y
  px: 0, // previous x
  py: 0 // previous y
}

$(document).ready(function() {

  // Set up our drums
  setupDrums();

  // Track the mouse's movement
  $(window).mousemove(mouseMoved);

  // Continuously update the distance the mouse has travelled in the last
  // interval
  setInterval(updateDistance,100);

});

// setupDrums ()
//
// Sets up a random drum loop
function setupDrums () {

  // Initialise Gibber
  Gibber.init();

  // Create our drums loop, at 1/8 note length
  var drums = EDrums('x.o.x*o.x.oxx-o.',1/8);

  // Set the clock rate of the synth (drums) to 0 so they don't play
  Clock.rate = 0;
}

// updateDistance ()
//
// Check how far the mouse has moved in the last interval and update
// the rate of drumming
function updateDistance () {
  // Get the x and y distance moved
  var dx = mouse.x - mouse.px;
  var dy = mouse.y - mouse.py;

  // Calculate the distance travelled
  var distance = Math.sqrt(Math.pow(dx,2) + Math.pow(dy,2));

  // Set the clock rate to half the distance
  // So if the mouse moved far (fast) the rate is fast,
  // if the mouse moved a short distance (slow) the rate is slow
  Clock.rate = distance/2;

  // Update the previous mouse location
  mouse.px = mouse.x;
  mouse.py = mouse.y;
}

// mouseMoved (event)
//
// Keeps track of the current mouse location
function mouseMoved (event) {
  mouse.x = event.pageX;
  mouse.y = event.pageY;
};
