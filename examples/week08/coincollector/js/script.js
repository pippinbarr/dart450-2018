/*

Coin Collector
Pippin Barr

A super fun coin collecting game!

*/

// Number of coins in our game
// It is a 'const' (a constant) because it never changes
const NUM_COINS = 99;

// Height and width variables for the window so we don't keep
// looking them up
var windowWidth;
var windowHeight;

// Our sound effects
var successSound;
var failSound;

// The next numbered coin we're looking for
var nextCoin = 1;

// The player's score
var score = 0;

$(document).ready(function() {

  // Store the width and height of the window so we can
  // calculate random locations
  windowHeight = $(window).height();
  windowWidth = $(window).width();

  // Load our sound files
  successSound = new Audio('sounds/coin.wav');
  failSound = new Audio('sounds/fail.wav');

  // Loop NUM_COINS times to create our coins
  for (var i = 1; i <= NUM_COINS; i++) {
    createCoin(i);
  }

});


// createCoin
//
// Create a div that looks (a bit) like a coin
function createCoin (number) {
  // Create the actual div
  var $coin = $('<div></div>');

  // Style it to look coiny. Coinish? Coinular? Coinian? Coinic?
  $coin.addClass('coin');

  // Get a random location on screen to put the coin
  var x = Math.random() * 0.9 * windowWidth;
  var y = Math.random() * 0.9 * windowHeight;

  // Put the coin there
  $coin.offset({
    top: y,
    left: x
  });

  // Add the coin's number to the coin
  $coin.text(number);

  // Add a click handler to our coin that plays the sound effect
  // and removes the coin from play
  $coin.on('click',handleCoinClicked);

  // Add the coin to the page
  $('body').append($coin);
}

// handleCoinClicked
//
// Called when a coin is clicked. Checked if it's the right coin
// and if so adds to the score, plays a nice sound, and sets up the
// next coin. If not, bad.
function handleCoinClicked() {
  // Check if the text in the clicked coin is the correct number
  // Note that THIS is a case where using === will actually break our
  // game because nextCoin is a NUMBER while $(this).text() is a STRING
  if ($(this).text() == nextCoin) {
    // If so, play the happy sound
    successSound.play();
    // Remove the coin from the page
    $(this).remove();
    // Increase the score
    score = score + 10;
    // Display the score
    $('#score').text(score);
    // Increase the next coin by one
    nextCoin++;
  }
  else {
    // SAD!
    failSound.play();
  }
}
