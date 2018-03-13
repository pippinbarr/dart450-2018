/**********************************************

DART 450, Winter 2018
Resizeable
Pippin Barr

Basic demonstration of jQuery's resizable function

**********************************************/

$(document).ready(function () {

  // The original
  $('img').resizable();

  // Specifying min and max dimensions
  // $('img').resizable({
  //   minHeight: 100,
  //   minWidth: 100,
  //   maxHeight: 600,
  //   maxWidth: 600
  // });

  // Preserving the aspect ratio
  // $('img').resizable({
  //   aspectRatio: true
  // });

  // Displaying a ghost of the resize
  // $('img').resizable({
  //   ghost: true
  // });

});
