/*

Tunneling
Pippin Barr

Using blast.js and some mathematics to let the user carve
tunnels in the text on a page...

*/

// A 'const' (constant) is like a 'var' except that you CAN'T CHANGE IT LATER
// We often write their names in ALL CAPITALS to show they're constant
// This one is to store the distance a span has to be from the mouse
// in order to be affected
const MAX_DISTANCE = 50;

$(document).ready(function() {

  // First we need to blast the entire text
  // I'm using 'word', looks good on 'character' too
  $('#text').blast({
    delimiter: 'word'
  });

  // Now we need to react whenever the user mouses over
  // any of our blasted spans
  $('.blast').on('mouseover',handleMouseOver);

});

// handleMouseOver
//
// Collects all spans within a set distance of the moused over span
// and adds them to an array, then animates each one to a random location
function handleMouseOver() {
  // Keep the currently moused over span in a variable
  var $mousedOver = $(this);
  // Go through every span on the page to check it's distance from the moused
  // over span
  $('.blast').each(function () {
    // Check if the distance this span is from the moused-over span
    // is less that the limit
    if (distance($(this),$mousedOver) < MAX_DISTANCE) {
      // If it is, then "unblast" it so that it won't be affected anymore
      $(this).removeClass('blast');
      // And animate it
      animateToBottom($(this));
    }
  });
}

// distance()
//
// A helper function that uses good old Pythagoras to calculate the distance
// between two jQuery elements
function distance($element1,$element2) {
  // First we'll get out the x and y locations of each element
  var x1 = $element1.offset().left;
  var y1 = $element1.offset().top;
  var x2 = $element2.offset().left;
  var y2 = $element2.offset().top;
  // Then we use pythagoras to calculate the distance between them
  var dist = Math.sqrt( Math.pow((x1-x2), 2) + Math.pow((y1-y2), 2) );
  // Then we RETURN the distance back to the place in the program that asked for it
  return dist;
}

// animateToRandomLocation()
//
// Takes a jQuery element and animates it to... a the bottom of the div.
function animateToBottom($element) {

  // First we get the current location of this element
  var currentX = $element.offset().left;
  var currentY = $element.offset().top;

  // Then we calculate a destination for it at the same x
  // and a y location at the bottom of the text div
  var destX = currentX;
  var destY = $('#text').offset().top + $('#text').height();

  // Then we calculate the relative change that represents, because we're going
  // to style the element with position relative
  var relX = destX - currentX;
  var relY = destY - currentY;

  // Style it with position relative
  $element.css({
    position: 'relative'
  });

  // Animate its top and left properties to our relative location
  $element.animate({
    top: relY + 'px',
    left: relX + 'px'
  });
}
