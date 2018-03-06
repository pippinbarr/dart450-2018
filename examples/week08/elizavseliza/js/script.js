/*

Eliza vs. Eliza
Pippin Barr

Make the webpage into a therapist... for itself...

Uses:

ResponsiveVoice
https://responsivevoice.org/

Eliza
http://www.masswerk.at/elizabot/

*/


// The therapy engine!
var eliza;

// A variable that stores the most recent words spoken (by either therapist)
var lastWords;

// We need voice parameters for our first therapist
var eliza1Voice = "UK English Male";
var eliza1Options = {
  pitch: 1,
  rate: 0.5,
  volume: 0.5,
  onend: eliza2Reply
}

// And for our second therapist
var eliza2Voice = "UK English Female";
var eliza2Options = {
  pitch: 1,
  rate: 0.5,
  volume: 0.5,
  onend: eliza1Reply
}


$(document).ready(function() {
  // Create an Eliza bot that can do therapy
  eliza = new ElizaBot();

  // Get our first words using Eliza's 'getInitial' that gets
  // some kind of greeting
  var initialWords = eliza.getInitial();

  // Say the words
  responsiveVoice.speak(initialWords,eliza1Voice,eliza1Options);

  // Remember them as the last words
  lastWords = initialWords;
});

// eliza1Reply
//
// Called when the second therapist has finished speaking
// so it makes the first therapist respond
function eliza1Reply() {
  // Work out what the therapist responds to the last statement
  var reply = eliza.transform(lastWords);
  // Say them in therapist 1's voice
  responsiveVoice.speak(reply,eliza1Voice,eliza1Options);
  // Remember what was said as the last words
  lastWords = reply;
}

// eliza2Reply
//
// As above, except the second therapists says the words
function eliza2Reply() {
  var reply = eliza.transform(lastWords);
  responsiveVoice.speak(reply,eliza2Voice,eliza2Options);
  lastWords = reply;
}
