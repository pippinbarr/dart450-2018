/*

Click Counter
Pippin Barr

The code here listens for click events on our counter div
and then makes the associated value go up and displays it.

*/

$(document).ready(function() {

  // We start with a variable to track the value of our counter
  // It starts at 0.
  var counter = 0;

  // Let's save our counter div into a jQuery variable too
  // Technically this can save some processing time because we don't
  // need jQuery to go and find it on the page each time we use it
  var $counterDiv = $('#counter');

  // Now let's update its text with the current value of our counter variable
  // which is 0 right now
  $counterDiv.text(counter);

  // Finally, let's listen for click events on our counter div
  $counterDiv.on('click',function () {
    // If it was clicked, let's make the counter variable go up by one
    counter = counter + 1;
    // And then let's update the counter div again
    $(this).text(counter);
  });
});
