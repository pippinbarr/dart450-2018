/**********************************************

DART 450, Winter 2018
Droppable
Pippin Barr

Basic example of jQuery UI's droppable function

**********************************************/

$(document).ready(function () {

  // Version 1 - Simple

  // Make the things you want to drag draggable
  $('#dragme').draggable();
  $('#dragmetoo').draggable();

  // Make the element you want to drop onto "droppable"
  // And if you want to have something happen when it is dropped
  // then add an event handler function for 'drop' like this
  $('#droponme').droppable({
    drop: handleDrop
  });

  // // Version 2 - Validation
  //
  // // Make the things you want to drag draggable
  // // But also specify that if it is not dragged onto a droppable
  // // that accepts it, it will revert its position
  // $('#dragme').draggable({
  //   revert: 'invalid'
  // });
  //
  // $('#dragmetoo').draggable({
  //   revert: 'invalid'
  // });
  //
  // // Make the element you want to drop onto "droppable"
  // // But also specify the CSS selector for things that
  // // this droppable element accepts
  // $('#droponme').droppable({
  //   drop: handleDrop,
  //   accept: '#dragme'
  // });

});

// handleDrop
//
// Called when the user drops something onto the droppable element
function handleDrop(event,ui) {
  // You can get access to the thing that was dropped via ui.draggable
  // So we'll remove it from the page
  ui.draggable.remove();
  // And we'll set the border of the droppable thing to green for more feedback
  $(this).css({
    borderColor: 'green'
  })
}
