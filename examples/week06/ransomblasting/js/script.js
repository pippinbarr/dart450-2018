/*

Ransom Blasting
Pippin Barr

Script to randomise the font for each character on a page so it looks, roughly-speaking,
like a ransom note.

*/

// Some arrays which we'll use to randomly select CSS properties
// for each character we're targeting.

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

var transforms = [
  "rotateZ(0)", "rotateZ(0)", "rotateZ(0)", "rotateZ(0)", "rotateZ(0)", "rotateZ(0)", "rotateZ(-10deg)", "rotateZ(5deg)", "rotateZ(15deg)", "rotateZ(20deg)"
];

var backgroundColors = [
  "#fff", "#fff", "#fff", "#ddd", "#aaa", "#aab"
];

var borders = [
  "0px", "1px solid", "2px solid", "4px solid", "8px solid"
];

$(document).ready(function() {

  // Use blast to target characters
  $('#content').blast({
    delimiter: 'character'
  });

  // Go through each element with the 'blast' class and assign
  // a random set of CSS to it
  $('.blast').each(randomizeCharacter);

});

// randomizeCharacter
//
// For each character targeted by Blast we just set its CSS to random
// entries from our arrays...
function randomizeCharacter () {
  $(this).css({
    display: 'inline-block', // Needed for changing the transform
    fontFamily: getRandomElement(fonts),
    fontSize: getRandomElement(fontSizes),
    color: getRandomElement(colors),
    backgroundColor: getRandomElement(backgroundColors),
    border: getRandomElement(borders),
    marginRight: getRandomElement(marginRights),
    transform: getRandomElement(transforms)
  })
}

// getRandomElement (array)
//
// Helper function get pull a random element from an array
function getRandomElement(array) {
  var randomElement = array[Math.floor(Math.random() * array.length)]
  return randomElement;
}
