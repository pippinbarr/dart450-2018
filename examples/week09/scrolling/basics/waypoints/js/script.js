/**********************************************

DART 450, Winter 2018
Waypoints
Pippin Barr

Basic example of using the Waypoints scrolling library

Uses:

Waypoints
http://imakewebthings.com/waypoints

**********************************************/

$(document).ready(function () {

  // Create a waypoint associated with our trigger div
  // 'handler' is the function to call when we scroll to the element
  // 'offset' is how far from the top of the page the element has to be to trigger it
  $('#trigger').waypoint({
    handler: handleTrigger,
    offset: '20%'
  });
});

// handleTrigger
//
// If we're scrolling down to the element it turns yellow,
// if we're scrolling up to the element it turns green
function handleTrigger(direction) {
  // When waypoints calls our handler function it tells it
  // the 'direction' the user was scrolling in to get there
  // We can use that to react differently
  if (direction == 'down') {
    $('#trigger').animate({
      backgroundColor: 'yellow'
    });
  }
  else {
    $('#trigger').animate({
      backgroundColor: 'green'
    });
  }
}
