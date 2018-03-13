/*

Magnetic Poetry
Pippin Barr

This script manages saving and loading data about the locations
of our magenetic fridge poetry words on the screen, as well as
setting up the words themselves to be draggable.

It's relatively complicated, but hopefully the comments will help.

*/


// This is a variable to save the positions of all the words
// in a JavaScript Object.
var positions = {};

$(document).ready(function() {

  // First we break up all the words on the page with blast
  // (Just doing this to make my life easier, could just as
  // as reasonably have the words already broken into divs,
  // or have an array of words.)
  $('#words').blast({
    delimiter: 'word'
  });

  // Add the word class to each word so it looks like a magnet
  $('.blast').addClass('word');

  // Remember the width and height of the window so we can randomly
  // position (more efficient that calling the functions over and)
  var width = $(window).width();
  var height = $(window).height();

  // Now try to load data from the user's computer that would tell us
  // where everything should go
  var positionsData = localStorage.getItem('positions');

  // Check if there was anything to load...
  if (positionsData) {
    // ... if there was, then we need to get out the data
    // Remember that getItem returns a String, so we use JSON.parse()
    // to convert it to our JS Object.
    positions = JSON.parse(positionsData);

    // Now we can use that data to position the words below
  }

  // Now we go through each of the words
  $('.blast').each(function (index) {

    // We add an id based on the unique index
    $(this).attr('id','word'+index);

    // And we work out where on the page to put the word
    var x,y;

    // If there is a location specified in the data
    // (Which we know is true if the positions object has
    // and entry for this word's id)
    if (positions[$(this).attr('id')]) {
      // Then we set x and y to the stored location
      x = positions[$(this).attr('id')].x;
      y = positions[$(this).attr('id')].y;
    }
    else {
      // Otherwise we choose a random location
      x = Math.random() * width * 0.8;
      y = Math.random() * height * 0.8;

      // And save that location to the object
      positions[$(this).attr('id')] = {
        x: x,
        y: y
      }
    }

    // Now we set the actual location of the word
    $(this).offset({
      left: x,
      top: y
    });

    // And we make the word draggable, with the extra property
    // that it should call savePosition whenever the user stops
    // dragging it
    $(this).draggable({
      stop: savePosition
    });

  });

  localStorage.setItem('positions',JSON.stringify(positions));

});

// savePosition
//
// Takes the current word and saves its location to the positions
// object. Then saves the positions object to the user's computer.
function savePosition () {

  // Set the data in the positions object that reflects where
  // the word is now (using offset())
  positions[$(this).attr('id')] = {
    x: $(this).offset().left,
    y: $(this).offset().top
  }

  // Save the positions object to the computer. Note that we need to
  // use JSON.stringify() to convert the object to a string so we
  // can save it.
  localStorage.setItem('positions',JSON.stringify(positions));
}
