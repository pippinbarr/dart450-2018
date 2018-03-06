/*

Eliza
Pippin Barr

A therapist.

Uses:

Eliza
http://www.masswerk.at/elizabot/

*/

// A constant to remember the key code of the enter key
const ENTER_KEY = 13;

// The therapy engine that will generate therapeutic responses!
var eliza;



$(document).ready(function() {
  // Create an Eliza bot that can do therapy
  eliza = new ElizaBot();

  // Get our first words using Eliza's 'getInitial' that gets
  // some kind of greeting/question as a string
  firstWords = eliza.getInitial();

  // Set the initial text in the Eliza text div
  $('#eliza').text(words);

  // Set up event handlers for clicking the button and for pressing
  // enter in the input field
  $('#submit').on('mousedown',handleInput);
  $('#input').on('keypress',handleEnter);
});


// handleInput
//
// Makes sure the input isn't empty and then finds out Eliza's
// reply and sets it on the page
function handleInput() {
  // Get the input text
  var inputText = $('#input').val();
  // Check if there's something there
  if (inputText !== '') {
    // If so, get Eliza's response to this text
    var response = eliza.transform(inputText);
    // Set the response on the page
    $('#eliza').text(response);
    // Set the input text to be empty for next time
    $('#input').val('');

  }
}

// handleEnter
//
// Checks if the user pressed enter inside the input field
// and submits the text if so
function handleEnter(event) {
  // Check if the key pressed was 13 (enter/return)
  if (event.which === ENTER_KEY) {
    // If so, handle the input in the input field
    handleInput();
  }
}
