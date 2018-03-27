/*

Emoji Translator
Pippin Barr

Primitive attempt to translate text into emoji by replacing
words with emoji equivalent.

*/

var emojis = null;
var emojiKeys;

$(document).ready(function() {

  // First thing to do is load our JSON with getJSON
  // Note that we can give it a URL for a JSON file
  // We tell it to call gotEmojis when the data is loaded
  $.getJSON('https://api.github.com/emojis',gotEmojis)

  $('#translate').on('click',translate);
});

function translate() {
  // First check if we're ready to do translation. If emojis is still
  // null, then it's not loaded yet and we shouldn't translate.
  if (emojis == null) {
    return;
  }

  // Clear the current text in the translation box by replacing it
  // with an empty string
  $('#translation').text('');

  // Get the text to translate from the text area
  var text = $('#text').val();

  // Split it into an array of individual words separated by spaces
  // using the split() function
  var words = text.split(' ');

  // Go through each word and put it on the page, if possible replacing it
  // with its emoji equivalent
  for (var i = 0; i < words.length; i++) {

    // Get the current word
    var word = words[i];

    // Convert it to lowercase (since keys are lower case)
    var key = word.toLowerCase();

    // Check if the last character is a punctuation mark and remove it
    // This uses:
    // - charAt() to get the last character in the string
    // - indexOf() to search for that character in a string of punctuation
    // - substring() to replace the key with a substring of itself
    //
    // Kind of fancy.
    if (".;,:'\"?!)".indexOf(key.charAt(key.length - 1)) != -1) {
      key = key.substring(0,key.length-1);
    }

    // Check if this key is in the list
    if (emojiKeys.indexOf(key) !== -1) {
      $('#translation').append('<img src="'+emojis[key]+'">');
    }
    // Check if the last letter of this key is an 's' and
    // the key without the 's' is in the list, so we can still
    // use pictures for plurals
    else if (key.charAt(key.length - 1) === 's' && emojiKeys.indexOf(key.substring(0,key.length-1)) !== -1) {
      $('#translation').append('<img src="'+emojis[key.substring(0,key.length-1)]+'">');
    }
    // Otherwise just add the word itself, no image
    else {
      $('#translation').append(word);
    }
    // Add a space
    $('#translation').append(' ');
  }
}

// gotEmojis (data)
//
// Called by getJSON when the data is loaded. The data argument
// will contain a JavaScript object representing the JSON.
function gotEmojis(data) {

  // Store the data in our emojis variable so that it can be used in
  // the translate() function above
  emojis = data;

  // Get an array containing the names of the keys (property names)
  // in the JSON data using a special function called Object.keys()
  emojiKeys = Object.keys(data);
}
