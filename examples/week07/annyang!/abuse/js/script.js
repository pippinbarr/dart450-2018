/*

Abuse

Abuse with Annyang!

*/

// An array of abusive words/phrases to be added to the end of
// "I am ..." to make the user feel terrible.
var abusePhrases = [
  "pathetic",
  "a loser",
  "a waste of space",
  "nobody",
  "ugly",
  "worthless",
  "hopeless",
  "hideous",
  "worth nothing",
  "a waste of time",
  "lame",
  "disgusting"
]

// A variable to store the current thing the user
// should be saying. Starts as nothing.
var currentPhrase = '';

$(document).ready(function() {


  // Make sure annyang is available...
  if (annyang) {

    // Add the commands to annyang. That is it should listen
    // for "I am..." or "I'm..." followed by some number of words.
    // In annyang's commands an asterisk (*) followed by a
    // variable names means that annyang will call the function
    // specified with EVERYTHING it heard from that point on...
    var command = {

      'I am *abusePhrase': said,
      'I\'m *abusePhrase': said

    };

    // Now we've defined the commands we give them to annyang
    // by using its .addCommands() function.
    annyang.addCommands(command);

    // Finally we tell annyang to start listening with its
    // .start() function
    annyang.start();

    // Choose a phrase for the user to say first
    currentPhrase = getNewPhrase();

    // Display the phrase on the page
    $('#command').text('Say, "I am ' + currentPhrase + '."');
  }

});


// said (phrase)
//
// Called by annyang when it hears a sentence of the form
// "I am X". phrase will contain the X part.
// Checks whether the user said what they were told to say
// and reacts accordingly.
function said(phrase) {

  // We check whether the user said what they were told to say
  // by comparing what annyang heard (phrase) with the
  // currentPhrase variable
  if (phrase == currentPhrase) {
    // If they said the right thing, we emphasise it...
    $('#command').text("That's right. You are " + phrase + ".");
    // Get a new thing for them to say
    currentPhrase = getNewPhrase();
    // And tell them to say it
    $('#command').append("<p>Now say \"I am " + currentPhrase + "\".");
  }
  else {
    // If they said the wrong thing, correct them and demand
    // they say it.
    $('#command').text("That's not right. Say \"I am " + currentPhrase + "\".");
  }
}


// getNewPhrase()
//
// Returns a random phrase from the abusePhrases array
function getNewPhrase() {
  // Select a random index into the abusePhrases array
  // This little formula of taking the floor of a random
  // number between 0 and 1 times the length of an array
  // gets used all the time.
  var phraseIndex = Math.floor(Math.random() * abusePhrases.length);
  // Get the phrase at that index
  var newPhrase = abusePhrases[phraseIndex];
  // Return it
  return newPhrase;
}
