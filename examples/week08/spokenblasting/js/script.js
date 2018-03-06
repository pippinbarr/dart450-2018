/*

Spoken Blasting
Pippin Barr

We use Blast to break the content into words which we attach mouse event to
so that we have a voice speaking the word when it is hovered.

*/

// Our voice parameters
var voice = 'UK English Male';
var voiceParameters = {
  pitch: 1,
  rate: 0.7,
  volume: 1
}


$(document).ready(function() {

  // Use blast to break out content into words with class 'blast'
  $('#content').blast({
    delimiter: 'word'
  });

  $('.blast').mouseover(function () {
    // When a word is moused over, use responsive voice to speak
    // its text (e.g. the word itself)
    responsiveVoice.speak($(this).text(),voice,voiceParameters);
  });

});
