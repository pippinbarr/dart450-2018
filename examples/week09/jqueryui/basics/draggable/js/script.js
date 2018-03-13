/**********************************************

DART 450, Winter 2018
Draggable
Pippin Barr

Basic examples of jQuery UI's draggable() function

**********************************************/

$(document).ready(function () {

  // Basic dragging
  // $('img').draggable();

  // Constrain the dragging to a container
  // $('img').draggable({
  //   containment: 'window'
  // });

  // Constrain the axis of dragging
  // $('img').draggable({
  //   axis: 'x'
  // });

  // Use event handlers
  // $('img').draggable({
  //   start: dragStarted,
  //   stop: dragFinished
  // });

});

// dragStarted
function dragStarted(ui) {
  // Make it greyscale while dragging
  $(this).addClass('greyscale');
}

// dragFinished
//
// Called when the user drags and then lets go of the image
function dragFinished() {
  // Remove the greyscale
  $(this).removeClass('greyscale');
}
