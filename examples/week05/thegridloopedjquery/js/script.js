/**********************************************

DART 450, Winter 2018
The Grid
Pippin Barr

Adds a grid of divs to the page

**********************************************/

$(document).ready(function () {

  // Set how many divs we want to add
  var totalDivsToAdd = 25; 
  // Keep track of how many we've added in the loop
  var divsAdded = 0; 

  // Keep running the while loop until we've added enough divs
  while (divsAdded < totalDivsToAdd) { 
    // Create the div
    var $div = $('<div></div>');
    // Add it to the page
    $('body').append($div);
    // Make a note that we've added one (so the loop will end at the right time)
    divsAdded = divsAdded + 1; 
  }

});
