/*

Beat Poetry
Pippin Barr

Make the webpage into a beat poet reading its own source code

Uses:

Ajax (for file loading)
http://api.jquery.com/jquery.ajax/

ResponsiveVoice
https://responsivevoice.org/

Gibber.lib
http://charlie-roberts.com/gibber/gibber-lib-js/

*/

// We have an array to store the lines of our 'poem'
var poem = [];

// We need to keep track of the current line of the poem being read
var currentLine = 0;

// We need voice parameters for our poet
var voiceParameters = {
  pitch: 1,
  rate: 0.75,
  volume: 0.5,
  // Note this means after finishing one line it will automatically
  // call speakNextLine() to start speaking the next
  onend: speakNextLine
}

$(document).ready(function() {

  // Load our own script file as text

  // We'll use .ajax for this, which is the main jQuery function
  // for requesting data from files/urls. It stands for:
  // Asynchronous JavaScript And XML
  $.ajax({
    url: 'js/script.js', // Location of the file
    success: gotData, // Function to call when data is ready
    dataType: 'text' // The type of data we're requesting
  });

  // Every beat poet needs erratic drumming as accompaniment,
  // so start that up
  startDrums();

});

// startDrums ()
//
// Starts the Gibber library and creates a random drum-loop
function startDrums() {
  // We have to initialise Gibber first
  Gibber.init();

  // Now let's create a random drum loop

  // Length of the loop (in beats)
  const DRUM_SEQUENCE_LENGTH = 50;

  // Possible drum types
  // x=snare, o=kick, -=closed hihat, *=open hihat, .=nothing
  var drumSymbols = ['x','o','-','*','.'];

  // This is the string we'll create our loop in
  var drumString = '';

  // Now loop for the sequence length and and add random drum characters
  // to our string
  for (var i = 0; i < DRUM_SEQUENCE_LENGTH; i++) {
    drumString += drumSymbols[Math.floor(Math.random() * drumSymbols.length)];
  }
  // Finally, create our drums with the string with a note length of 1/8
  var b = EDrums(drumString,1/8);
}

// gotData (data)
//
// Called when .ajax has loaded our script.js file. The parameter will be
// the file loaded as a string of text
function gotData (data) {
  // Split the file into lines based on the 'carriage return' character \n
  // .split() returns an ARRAY
  poem = data.split('\n');
  // Speak the next line of the poem...
  speakNextLine();
}

// speakNextLine ()
//
// Speaks the next line of the poem
function speakNextLine () {
  // Make sure we're not at the end of the poem
  if (currentLine < poem.length) {
    // Speak the current line in the poem array
    // Note that in voiceParameters we have set onend to call
    // speakNextLine - so after one line is finished, it will
    // speak the next.
    responsiveVoice.speak(poem[currentLine],"UK English Male",voiceParameters);
    // Increase the current line
    currentLine++;
  }
}
