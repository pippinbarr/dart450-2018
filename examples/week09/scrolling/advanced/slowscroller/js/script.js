/*

Slow Scroller
Pippin Barr

The script sets up ScrollMagic scenes for each line of the sonnet
as we add it to the page. The scenes make the line only become visible
for a very small distance of scrolling, so you have to scroll much
more slowly and carefully than normal in order to see them.

Uses:

ScrollMagic
http://scrollmagic.io/

TweenMax
https://greensock.com/tweenmax

*/


$(document).ready(function() {

  // We create a ScrollMagic controller so we can use the library
  var controller = new ScrollMagic.Controller();

  $('.line').each(function (index) {

    // First we need to give the element a unique id attribute
    // so we can target it specifically with ScrollMagic
    //
    // When using jQuery's .each() there is an argument "index"
    // which gives a unique number for each of the elements
    // as we act on it
    $(this).attr({
      id: "line" + index
    });

    // We'll also make a string with the CSS version of the id in it
    var lineId = "#line" + index;

    // Now create a scene for this line of the sonnet and give it a very
    // small duration property so that if you scroll fast it will vanish
    // really quickly.
    var scene = new ScrollMagic.Scene({
      triggerElement: lineId,
      duration: 5,
    });

    // Set up a tween to change opacity up to 1 during the tween
    scene.setTween(lineId, 0.5, {
      opacity: '1',
    });

    // Also set up a class toggle so that the element is visible
    // while being scrolled, but invisible otherwise
    scene.setClassToggle(lineId,"visible");

    // Set the location of the trigger to the center of the page
    scene.triggerHook(0.5);

    // Optionally add the indicators
    // .addIndicators()

    // Add the scene to the controller
    scene.addTo(controller);

  });

});
