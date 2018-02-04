/**********************************************

DART 450, Winter 2018
The Grid
Pippin Barr

Adds a grid of divs to the page

**********************************************/

$(document).ready(function () {

  // Set how many divs we want to add
  var totalDivsToAdd = 25; 

  // Use a for loop to count up to totalDivsToAdd
  for (var i = 0; i < totalDivsToAdd; i++) {
    // Create the div
    var $div = $('<div></div>');
    // Add it to the page
    $('body').append($div);
  }

});
