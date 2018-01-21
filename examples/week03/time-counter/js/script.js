/*

Time Counter
Pippin Barr

The code here sets an interval to run code repeatedly
which updates the text in a div on the page with the
value of a counter variable;

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

  // Let's set how long we wait between updates (in milliseconds)
  var interval = 1000;

  // We want to update the counter each interval, so we use the
  // setInterval function, which calls a function
  // over and over again with a delay each time
  //
  // Documentation:
  // http://www.w3schools.com/jsref/met_win_setinterval.asp

  setInterval(function () {
    // Increment the counter
    counter = counter + 1;
    // There are multiple ways of doing this:
    // counter = counter + 1;
    // counter += 1;
    // counter++

    // Set the text on the page to be the new value of the counter
    $counterDiv.text(counter);

    // This next line is the end of the setInterval, closing
    // the function it will run with a curly bracket, and then
    // giving the delay between runs after a comma
  },interval);
});
