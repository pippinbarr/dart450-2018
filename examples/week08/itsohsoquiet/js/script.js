/*

It's Oh So Quiet
Pippin Barr

The script gets access to the user's microphone with getUserMedia
and then relies on audio code by Chris Wilson to get access to the
current volume level in the microphone.

It then uses the volume to set the visibility of page's content, which
means you can only see the content if it's nice and quiet.

Uses:

AudioContext (built into JavaScript in browsers):
https://www.html5rocks.com/en/tutorials/webaudio/intro/

Chris Wilson's Volume Meter
https://github.com/cwilso/volume-meter
*/

// How often to check the current volume
const CHECK_INTERVAL = 100;

// An audiocontext is used to work with audio
var audioContext;
// We will create an audio meter and put it in here
var meter;
// A place to store the output stream of the microphone
var microphone;


$(document).ready(function() {

  // To listen to the microphone we need to use 'getUserMedia' to ask the browser
  // for access to it. To do that, we first have to work out _which_
  // getUserMedia function is available on this computer
  navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;

  // If we found a getUserMedia that can work
  if (navigator.getUserMedia) {
    // If we're here we can call getUserMedia to ask for access to the microphone    
    // We use {audio: true} to get the microphone
    // We give two function names as well
    //  - handleAudio will be called when the microphone is accessed
    //  - audioError will be called if there is an error
    navigator.getUserMedia({audio: true}, handleAudio, audioError);
  }

  // We're going to repeatedly check the current audio volume
  // in order to update the visibilty of the page content,
  // so we need an interval that calls our update() function
  setInterval(update,CHECK_INTERVAL);

});

// handleAudio (stream)
//
// Called when we have access to the microphone's audio stream
// The parameter 'stream' has the stream in it
function handleAudio (stream) {
  // Create our AudioContext for working with audio. It will alllow us
  // to interact with the microphone in this case
  audioContext = new AudioContext();

  // Store the audio stream from the microphone in our microphone variable
  microphone = audioContext.createMediaStreamSource(stream);

  // Create an audio meter with volume-meter.js for checking the volume
  meter = createAudioMeter(audioContext);

  // Connect the meter and the microphone so the meter has access
  // the microphone stream
  microphone.connect(meter);
}

// audioError ()
//
// If something goes wrong, panic!
function audioError(e) {
  $('#volume').css({
    'background-color': 'red'
  })
}

// update ()
//
// Called every CHECK_INTERVAL milliseconds.
// Checks to make sure the meter exists, and then sets the opacity
// of our content div to be relative to the current volume.
function update () {
  // Make sure our volume meter actually exists before we go any further
  if (meter) {
    // meter.volume gives us a number between 0 (silence) and 1 (loudest possible)
    // If you look at the value of meter.volume, it's often very, very small
    // for ambient noise, so we multiple by 10000 to make our webpage more
    // sensitive to noise
    //
    // We subtract that value from 1 because we want the opacity of our
    // content to get LOWER when the volume gets HIGHER.
    var newOpacity = 1 - (meter.volume * 1000);
    // Make sure it doesn't become negative
    if (newOpacity < 0) {
      newOpacity = 0;
    }
    // Could also use: var newOpacity = Math.max(0, 1 - meter.volume*10000)
    // if we don't want the if statement

    // Now set the opacity of our content (the text on the page)
    $('#quiet').css({
      opacity: Math.max(0, newOpacity)
    });

    // TRY THIS: just set newOpacity to be meter.volume instead,
    // what does this do? How does it change your experience of the page?
  }

}
