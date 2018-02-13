/*

Ransom Blasting
Pippin Barr

Script to randomise the font for each word on a page so it looks,
very roughly-speaking, like a ransom note.

*/

// Some arrays which we'll use to randomly select CSS properties
// for each word we're targeting.

var fonts = [
  "sans-serif","courier","times","georgia","palatino","serif","comic sans ms",
  "impact","charcoal"
];

var fontSizes = [
  "2em","2.2em","2.5em","3em","3.5em","5em"
]

var colors = [
  "#000","#111","#111","#222","#333"
];

var marginRights = [
  "0px", "2px", "4px", "5px", "10px", "20px"
];

var paddings = [
  "0px", "2px", "4px", "5px", "10px", "25px"
];

var transforms = [
  "rotateZ(0)", "rotateZ(0)", "rotateZ(0)", "rotateZ(0)", "rotateZ(0)", "rotateZ(0)", "rotateZ(-10deg)", "rotateZ(5deg)", "rotateZ(15deg)", "rotateZ(20deg)"
];

var backgroundColors = [
  "#fff", "#fff", "#fff", "#ddd", "#aaa", "#aab"
];

var borders = [
  "1px solid", "2px solid", "4px solid", "8px solid"
];


$(document).ready(function() {

  // Use blast to target words
  $('#content').blast({
    delimiter: 'word'
  });

  // Go through each element with the 'blast' class and assign
  // a random set of CSS to it
  $('.blast').each(randomizeStyle);

});

// randomizeCharacter
//
// For each character targeted by Blast we just set its CSS to random
// entries from our arrays...
function randomizeStyle () {
  // Note that we can still use 'this' to refer to the current element
  // targeted by .each() above, even though we've written a separate
  // function to keep things tidy
  $(this).css({
    display: 'inline-block', // Needed for changing the transform
    fontFamily: getRandomElement(fonts),
    fontSize: getRandomElement(fontSizes),
    color: getRandomElement(colors),
    backgroundColor: getRandomElement(backgroundColors),
    border: getRandomElement(borders),
    marginRight: getRandomElement(marginRights),
    padding: getRandomElement(paddings),
    transform: getRandomElement(transforms)
  })
}

// getRandomElement (array)
//
// Helper function get pull a random element from an array
//
// Note that this is an example of a function that
//
// - RECEIVES information (the array to get a random element from)
// - RETURNS information (the element it chose)
//
function getRandomElement(array) {
  // Choose a random index (box number) in the provided array
  var randomIndex = Math.floor(Math.random() * array.length);
  // Get the element at that index (box number)
  var randomElement = array[randomIndex];
  // Return it to whoever asked for it
  return randomElement;
}
