/*

Emojis
Pippin Barr

Basic script demonstrating that you can load JSON from other
websites too! It loads JSON from github that contains URLS
for various emoji images.

*/


$(document).ready(function() {

  // First thing to do is load our JSON with getJSON
  // Note that we can give it a URL for a JSON file
  // We tell it to call gotEmojis when the data is loaded
  $.getJSON('https://api.github.com/emojis',gotEmojis)

});

// gotEmojis (data)
//
// Called by getJSON when the data is loaded. The data argument
// will contain a JavaScript object representing the JSON.
function gotEmojis(data) {

  // How many emoji to display
  var numEmoji = 30;

  // Get an array containing the names of the keys (property names)
  // in the JSON data using a special function called Object.keys()
  var emojiKeys = Object.keys(data);

  console.log(emojiKeys);

  // Now use a loop to create numEmoji worth of emoji
  for (var i = 0; i < numEmoji; i++) {
    // First choose a random index in emojiKeys, which we will use
    // to get the property/key name of the emoji we want to display
    var randomIndex = Math.floor(Math.random() * emojiKeys.length);

    // Now get the name of the property/key from the array
    var randomEmojiKey = emojiKeys[randomIndex];

    // Now use the key name with the original data to get the URL
    // associated with that key
    var randomEmojiURL = data[randomEmojiKey];

    // Finally append an image to our page that uses that URL as its
    // src property so that it display the chosen emoji
    $('body').append('<img src="'+ randomEmojiURL + '"/>');
  }

}
