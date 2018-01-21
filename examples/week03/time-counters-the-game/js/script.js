/*

Time Counter, The Game
Pippin Barr

The code here makes the numbers in the various divs go _up_ if you
mouse over them (getting points), but they also go _down_ over time.

It's just like life?!

*/

$(document).ready(function() {
  // Let's save our counter div into a jQuery variable too
  // Technically this can save some processing time because we don't
  // need jQuery to go and find it on the page each time we use it
  var $counterDivs = $('.counter');

  // Now let's update its text with the current value of our counter variable
  // which is 0 right now
  $counterDivs.text(0);

  // We're going to let the player make the number in a div go up by one
  // every time they mouse over it...
  $counterDivs.on('mouseover',function () {
    // First we get the text of this div (which will be the current number)
    var text = $(this).text();
    // Then we translate it to an integer with parseInt()
    var value = parseInt(text);
    // Then we add one to that value - it's math!
    value = value + 1;
    // Finally, we set the text of the div to the new value
    $(this).text(value);
  });

  // Let's set how long we wait between updates (in milliseconds)
  var interval = 2000;

  // We use setInterval to tell _all_ the counter divs to go down by one
  // once per interval
  setInterval(function () {
    // In jQuery when we have a _set_ of elements we can call a function on
    // each of them individually with .each() like this...
    $counterDivs.each(function () {
      // So let's get the text content of this div
      var text = $(this).text();
      // Then let's translate that text to an integer so we can do math
      var value = parseInt(text);
      // Now subtract one so it goes down
      value = value - 1;
      // Finally set the value back into the div so it displays
      $(this).text(value);
    });
  },interval);
});
