/*

DART450
Animate on hover

Apply a CSS animation to elements when hovered by adding a CSS class
with an animation property

*/

// We use "document ready" so that our code only runs once the whole
// webpage is loaded and ready.

$(document).ready(function() {

  // We use the jQuery 'mouseover' event to "listen" for hovers on our
  // div with class 'resizeable'

  $('.resizeable').on('mouseover',function () {
    // This is what we do when this class is mouseovered

    // Inside the function "this" refers to the thing that got hovered
    // And we use .addClass() to animate by applying a CSS class with
    // animation properties
    $(this).addClass('resize');
  });
});
