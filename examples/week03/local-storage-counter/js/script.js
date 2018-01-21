/*

localStorage Counter
Pippin Barr

The code here sets an interval to run code repeatedly
which updates the text in a div on the page with the
value of a counter variable

It also saves the state of the counter to the user's
computer using localStorage so it can continue counting
up when they come back to the website instead of
resetting to 0.

localStorage documentation:
http://www.w3schools.com/html/html5_webstorage.asp

*/


$(document).ready(function() {
  // First we get back the saved value of the counter
  // (This could be nonsense if there's nothing saved there)
  var savedCounter = localStorage.getItem("counter");

  // localStorage stores everything as a _string_, so
  // we have to convert the string to an integer value
  // which is what our counter needs to be.
  //
  // parseInt() is used to convert a string to an integer.
  // It looks at the start of the string and takes the first
  // thing that looks like an integer (ignoring spaces).
  //
  // "10" turns into 10
  // "     20" turns into 20
  // "30 years" turns into 30
  // But "I'm 40 years old" doesn't turn into 40, instead it
  // will turn into NaN (which is "Not a Number")
  //
  // In our case we know we'll only store the counter number itself
  // so the string will be the right format.
  var counter = parseInt(savedCounter);

  // We need to make sure that we got an actual number out of this
  // so we'll have to use an if statement here, we'll learn about
  // them next week in detail
  if (isNaN(counter)) {
    // If the counter is Not A Number (NaN), then we set it to zero
    counter = 0;
  }

  // Let's save our counter div into a jQuery variable too
  // Technically this can save some processing time because we don't
  // need jQuery to go and find it on the page each time we use it
  var $counterDiv = $('#counter');

  // Now let's update its text with the current value of our counter variable
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

    // Set the text on the page to be the new value of the counter
    $counterDiv.text(counter);

    // Now we need to save the current value of the counter to storage
    // We save our value by using localStorage.setItem()
    // It takes TWO parameters:
    //    * the NAME of the "storage slot" to save in (basically
    //      like a variable name)
    //    * the VALUE we want to save in it (in this case, it's
    //      the value of our counter)
    localStorage.setItem('counter',counter);

    // This next line is the end of the setInterval, closing
    // the function it will run with a curly bracket, and then
    // giving the delay between runs after a comma
  },interval);
});
