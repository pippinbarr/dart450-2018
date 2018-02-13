/*

Basic Blasting
Pippin Barr

Some examples of the basics of the Blast plugin. Essentially changing the
styling of characters/words/sentences.

*/

$(document).ready(function() {

  // Most basically, we can just call .blast() on an element
  // to divide it into spans (around words in this case) each with
  // a class of 'blast'
  $('#basicblast').blast();

  // More creatively, though, we can call .blast() and then listen for an event
  // on each of the elements created by blast (e.g. in this case
  // each span around each character)
  $('#blastbycharacter').blast({
    delimiter: 'character'
  }).mouseover(fadeToBlack);

  // Same thing for each word
  $('#blastbyword').blast({
    delimiter: 'word'
  }).mouseover(fadeToBlack);

  // Same thing for each sentence
  $('#blastbysentence').blast({
    delimiter: 'sentence'
  }).mouseover(fadeToBlack);

  // We can also use blast to select and put spans around specific
  // search text (like 'nec') and also to add a custom class to the
  // things it finds, and even a specific numbered id...
  $('#blastbysearch').blast({
    search: 'sex',
    customClass: 'nec',
    generateIndexID: true
  }).mouseover(fadeToBlack);

});


// fadeToBlack (index)
//
// A simple function to fade the background colour of the element
// to black
function fadeToBlack () {
  // We'll use jQuery's animate function here
  // Note that because we're animating a colour, we have to include jQuery UI
  // in our index.html
  $(this).animate({
      backgroundColor: 'black',
  },1000);
}
