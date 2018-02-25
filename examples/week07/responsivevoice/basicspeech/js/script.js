/*

Basic Speech
Pippin Barr

Using ResponseVoice to say something with the browser
*/

$(document).ready(function() {
  // We can set .OnVoiceReady on the responsiveVoice library object
  // with a function to call when the speech functionality for the
  // page is ready...
  responsiveVoice.OnVoiceReady = speechIsReady;
});


// speechIsReady()
//
// When speech is ready, add a div to the page with some text
// and say the text.
function speechIsReady () {
  $('body').append('<div>Hello, I am a webpage.</div>')
  responsiveVoice.speak("Hello, I am a webpage.");
}
