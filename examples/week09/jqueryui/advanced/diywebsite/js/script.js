/*

DIY Website
Pippin Barr

This script will set all elements of our website to be draggable
and will save their locations when they are moved. When a user
visits the site again, things will be where they left them.

*/

// A javascript object to store the locations of all divs
var positions = {};

$(document).ready(function() {

  // Remember the width and height of the window
  var width = $(window).width();
  var height = $(window).height();

  // Now we try to load data about the website's configuration
  var positionsData = localStorage.getItem('positions');

  // Check if there was anything to load...
  if (positionsData) {
    console.log(positionsData);
    console.log("Setting saved...")

    // ... if there was, then we need to get out the data
    // Remember that getItem returns a String, so we use JSON.parse()
    // to convert it to our JS Object.
    positions = JSON.parse(positionsData);
  }
  else {
    console.log("Setting random...")

    // If there was no positions data, then just set all the position
    // data to random locations
    $('div').each(function () {
      // Position the element randomly on the page
      var x = width * Math.random() * 0.9;
      var y = height * Math.random() * 0.9;

      // Set the position in the positions object
      var id = $(this).attr('id'); // get the id

      // Note that in this way we are *creating* properties
      // in the object corresponding to the ids of our page's
      // elements
      positions[id] = {
        x: x,
        y: y
      };
    });
  }

  // Now we have a positions object either with saved positions
  // or random positions, so we need to position all the divs
  // and make them draggable and saveable
  $('div').each(function () {
    var id = $(this).attr('id'); // get the id

    // Set the offset based on the data
    $(this).offset({
      left: positions[id].x,
      top: positions[id].y
    });

    // Set the element to be draggable and to save its
    // position when dragging stops
    $(this).draggable({
      stop: savePosition
    });
  });

  // Finally, we save the positions object back to the computer
  localStorage.setItem('positions',JSON.stringify(positions));
});

// savePosition
//
// Called when the user stops dragging an element. When this happens
// we need to update its stored position in our positions object and then
// save that object to the computer so the site remembers.
function savePosition () {
  var id = $(this).attr('id'); // Get the id

  // Set the data in the positions object based on the current offset
  // of this element
  positions[id].x = $(this).offset().left;
  positions[id].y = $(this).offset().top;

  // Save the positions object
  localStorage.setItem('positions',JSON.stringify(positions));
}
