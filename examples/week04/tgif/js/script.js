/*

TGIF
Pippin Barr

This code checks what day it is and displays it appropriately
on the webpage itself. It particularly likes Fridays.

*/

$(document).ready(function() {

  // First we need to find out what day it is.

  // JavaScript has a whole set of functions we can use based on what
  // is called the Date object (more on objects like this next week).
  // In our case, we can use Date's getDay() method to find out the day.

  // But first we need to get the current date in a variable.
  // To do this we are going to create a Date object, with this
  // somewhat weird looking syntax you shouldn't worry about too much
  // right now.
  var date = new Date();

  // By default, if you create a date object like this (with no parameters
  // in the parentheses ) it will create a date object that stores the
  // date representing the exact moment you created it (from the year all
  // the way down to the milliseconds).

  // The date object we created can tell us all things about the date
  // it represents. We can ask what year it is, what millisecond it is,
  // and what day of the week it is...
  //
  // Documentation here for example:
  // http://www.w3schools.com/jsref/jsref_obj_date.asp

  // So we ask our date object in "date" for the current day using its
  // .getDay() method
  // http://www.w3schools.com/jsref/jsref_getday.asp
  var today = date.getDay();

  // BUT the value we get back from Date.getDay() is an integer,
  // not the name of the day of the week, so we should convert it
  // from a number to a word. We'll do this with if statements!

  // We'll set up a variable to hold the name of the day in it, and
  // we'll initialise it with some text. If we see that text on our
  // webpage, we'll know something went wrong!
  var todayName = "Nothing."

  // Now we use if statements to check each of the possible integers
  // that we know date.getDay() could have returned. And we set
  // todayName to be the name of the day corresponding to the integer.
  if (today == 0) {
    todayName = "Sunday";
  }
  else if (today == 1) {
    todayName = "Monday";
  }
  else if (today == 2) {
    todayName = "Tuesday";
  }
  else if (today == 3) {
    todayName = "Wednesday";
  }
  else if (today == 4) {
    todayName = "Thursday";
  }
  else if (today == 5) {
    todayName = "Friday";
  }
  else if (today == 6) {
    todayName = "Saturday";
  }

  // (Yes, there are easier/fancier way of converting the day number
  // to a word. But this will work.)

  // Now we can set our HTML to display the day name!
  $('#today').text(todayName);

  // And if it's Friday, we should act excited by adding our special
  // friday animation to the text
  if (todayName == "Friday") {
    $('#today').addClass('tgif');
  }
});
