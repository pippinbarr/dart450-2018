/*

Basic Speech
Pippin Barr

Using ResponseVoice to say something with the browser
*/

// A global variable to store whether speech is ready to be used
var speechReady = false;

// The specific voice we want the computer to use
// See: http://responsivevoice.org/text-to-speech-languages/
var voice = 'UK English Male';

// The parameters for the voice in an object
var voiceParameters = {
  pitch: 1,
  rate: 0.7,
  volume: 1
}

$(document).ready(function() {
  // We can set .OnVoiceReady on the responsiveVoice library object
  // with a function to call when the speech functionality for the
  // page is ready...
  responsiveVoice.OnVoiceReady = speechIsReady;

  // We can have speech happen in reaction to different page
  // events like clicks and keypresses, to make things more dynamic...

  $(document).click(function () {
    // say() is a function defined below
    say("That feels amazing");
  });

  $(document).keypress(function (event) {
    say("I love it when you press key code number " + event.which);
  });

  $(window).resize(function () {
    say("It feels so erotic when you resize the window")
  });

  $(window).mouseleave(function() {
    say("Don't go, it was just getting interesting");
  });
});

// speechIsReady()
//
// Rather than DO anything when speech is ready, we set a variable
// to REMEMBER that speech is ready. Then we can check that variable
// before trying to use speech functions...
function speechIsReady () {
  speechReady = true;
}

// say(text)
//
// Checks if speech is available and if it is, speaks the text given
// with the parameters determined at the top of the script.
function say (text) {
  if (speechReady) {
    responsiveVoice.speak(text,voice,voiceParameters);
  }
}
