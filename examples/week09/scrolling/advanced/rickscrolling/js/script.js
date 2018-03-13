/*****************

RickScrolling
Pippin Barr

A scrolling-based computer-voice karaoke experience of Rick Astley's
Never Gonna Give You Up.

Uses:

ScrollMagic
http://scrollmagic.io/

Tubular
http://www.seanmccambridge.com/tubular/

ResponsiveVoice
http://responsivevoice.org/

******************/



// Track whether speech is available
var speechReady = false;

// Our voice and its parameters for the singing
var voice = 'UK English Male';
var voiceParameters = {
  pitch: 1,
  rate: 0.7,
  volume: 1
}


$(document).ready(function() {

  // Set Responsive Voice to tell us when it's ready by calling
  // our function speechIsRead()
  responsiveVoice.OnVoiceReady = speechIsReady;

  // Set up tubular on our wrapper div.
  $('#wrapper').tubular({
    // This is just the unique identifier of the YouTube video
    // You can find this in the URL of the video for example.
    // In this case, Rick Astley's Never Gonna Give You Up
    videoId: 'dQw4w9WgXcQ',
    // Tubular defaults to muting the sound (for aesthetics presumably),
    // but in this case we need the music!
    mute: false,
    // Here we define the class for volume down – it's just attached to the
    // main 'content' div so we can click on the div to lower the volume
    volumeDownClass: 'tubular-volume-down',
    // And a single click reduces the volume. It's a bit confusing that this
    // is called increaseVolumeBy, but it applies to the decrease as well
    increaseVolumeBy: 70
  }); // That's it. Now the video will do its thing.


  // Create a ScrollMagic Controller to handle our scrolling
  var controller = new ScrollMagic.Controller();

  // Go through each lyric on the page (the series of divs with class 'lyric')
  // (Note that "index" will give us a unique number to identify each lyric div)
  $('.lyric').each(function (index) {

    // Remember the element containing the lyric
    // We need to do this for our handler functions for enter and leave below
    var lyric = $(this);

    // Give the lyric a specific id to differentiate it from the others
    // This is needed when we're creating a scene for this specific div
    lyric.attr('id','lyric'+index);

    // Create our scene for this lyric, to be triggered by the div
    // containing the lyric itself.
    var scene = new ScrollMagic.Scene({
      triggerElement: "#lyric"+index, // The id we created just above
      duration: 100
    });

    // Add a handler for when the scrolling trigger enters the div
    scene.on("enter", function (e) {
      // On enter, we should make the lyric flash
      lyric.addClass('flasher');
      // And speak the text in the lyric's div, which is the song lyrics
      say(lyric.text());
    });

    // Add a handler for when the scrolling trigger leaves the div
    scene.on("leave",function (e) {
      // On leave, we should stop the lyric from flashing
      lyric.removeClass('flasher');
    });

    // For debugging, we can display the indicators
    scene.addIndicators()

    // Finally, add the scene to our controller
    scene.addTo(controller);

  });

});

// speechIsReady()
//
// Just sets our boolean variable so we know the computer is ready to talk
function speechIsReady () {
  speechReady = true;
}

// say (text)
//
// Uses Responsive Voice with our voice parameters to say the text provided.
function say (text) {
  // Only say the text is speech is actually active
  if (speechReady) {
    // If it is, say the text
    responsiveVoice.speak(text,voice,voiceParameters);
  }
}
