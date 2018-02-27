/*

Basic Speech
Pippin Barr

Using ResponseVoice to say something with the browser
*/

$(document).ready(function() {

  // Get the text in the div on our page
  var divText = $('div').text();

  // Say it!
  responsiveVoice.speak(divText);

});
