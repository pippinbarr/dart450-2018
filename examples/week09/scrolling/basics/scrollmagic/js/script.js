/*

ScrollMagic with Events
Pippin Barr

An example of using ScrollMagic based on the various events you
can track with it.

Uses:

ScrollMagic
http://scrollmagic.io/

*/

var controller;

$(document).ready(function() {

  // Create a controller for ScrollMagic
  // (Have to do this whenever you start using it)
  controller = new ScrollMagic.Controller();

  // Make a new scene for handling scrolling in our #trigger element
  // A 'scene' is used for all the events related to one trigger element.
  // The 'duration' is used to be able to check how _much_ of the element
  // we have scrolled through, which can be helpful. It is a duration in pixels.
  var scene = new ScrollMagic.Scene({
    triggerElement: "#trigger",
    duration: $('#trigger').height()
  })

  // Add an update handler (called whenever scrolling is happening)
  scene.on("update", handleScrollUpdate);

  // Add an enter handler (called whenever the trigger enters
  // the #trigger div).
  scene.on("enter", handleTriggerEnter);

  // Add aa leave handler (called whenever the trigger leaves
  // the #trigger div).
  scene.on("leave", handleTriggerLeave);

  // Add a progress handler (called whenever there is scrolling within
  // the div, gives us the fraction of progress through the div)
  scene.on("progress", handleTriggerProgress);

  // Add a start handler (called when the trigger passes the top of the trigger)
  scene.on("start", handleTriggerStart);

  // Add an end handler (called when the trigger passes the bottom of the trigger)
  scene.on("end", handleTriggerEnd);

  // Put the trigger higher up on the scrollbar (the trigger hook is the location on
  // the page that triggers things)
  scene.triggerHook(0.1);

  // Add debugging indicators
  // (To use this you need to include the plugins/debug.addIndicators.min.js file
  // in your index.html)
  scene.addIndicators();

  // Add to the controller to it works
  scene.addTo(controller);

});


function handleScrollUpdate() {
  // Find out what direction is being scrolled in from the controller
  var dir = controller.info("scrollDirection");

  // Change the background color of the page based on the scroll
  // direction: greenish for FORWARD, pinkish for REVERSE
  if (dir == "FORWARD") {
    $('body').css({
      backgroundColor: "rgb(100,200,100)"
    });
  }
  else if (dir == "REVERSE") {
    $('body').css({
      backgroundColor: "rgb(200,100,100)"
    });
  }
}

function handleTriggerEnter() {
  $('#trigger').css({
    backgroundColor: "rgb(40,200,40)"
  });
}

function handleTriggerLeave() {
  $('#trigger').css({
    backgroundColor: "rgb(200,40,40)"
  })
}

function handleTriggerProgress(e) {
  // Display the progress on our page:
  //
  // e.progress contains the fraction of progress (e.g. 0.5 if we're halfway through)
  // (e.progress * 100) gives the fraction as a percentage (with decimal point)
  // Math.floor() to remove anything after the decimal point
  // and we add the percentage sign at the end
  var progressString = Math.floor(e.progress*100) + '%';
  $('#progress').text(progressString);
}

function handleTriggerStart() {
    console.log("Passed the top of the element!");
}

function handleTriggerEnd() {
    console.log("Passed the bottom of the element!");
}
