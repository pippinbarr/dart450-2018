/*

Ugly
Pippin Barr

Some code to uglify our webpage. Heavy use of Math.random() to generate
random rotations and to select random images. Uses functions to hide
code from myself.

Except I broke it on purpose. Ha ha ha ha!

*/

// The total number of images we'll add to the page
// is going to be a random integer between 0 and 99
const TOTAL_IMAGES = randomNumberInRange(0,100);

// We have 7 images availabe in our images/ directory
const AVAILABLE_IMAGES = 10;

// We hide the page sometimes after a delay
const HIDE_DELAY = 2000;


$(document).ready(function() {

  // Here we're going to use Math.random() to control the
  // probability of different outcomes.
  // Because Math.random() gives us a random number between 0 and 1
  // it's like a probability. In theory, the number that comes out
  // is less than 0.25 25% of the time, less than 0.5 50% of the time,
  // less than 1.0 100% of the time, and so on. We can use that to
  // do thing probabilistically.
  //
  // First we get a random number
  var r = Math.random();

  // Now we check what it is less than to choose what to do.
  if (r < 1) {
    // 25% of the time we just don't do anything
  }
  else if (r < 0.5) {
    // Another 25% of the time we'll hide the contents of the
    // webpage after 5 seconds.
    // Note that this is 25% of the time because we've already
    // accounted for 25% of the time in the first conditional.
    stTimeout(function () {
      $('body').hide();
    ,HIDE_DELAYED);
  }
  else {
    // The other 50% of the time we'll mess up the page
    messUpPages();
});


// messUpPage()
//
// Applies a bunch of random numbers and images to the page to make
// it a big mess

function messUpPage()
  // This is one nice use of a function to make things a bit
  // less confusing. Instead of putting an "anonymous function"
  // in as a parameter, we can just put in the name of a function
  // we have defined elsewhere with a sensible name
  $("title").click(titleClicked);
  // Now our titleClicked() function will be called whenever someone
  // clicks the title!

  // We will randomly rotate each line of the poem by selecting the
  // class and using jQuery's .each() which is effectively a LOOP
  // that applies the function for each element it finds with the class

  $('.line').each(function ( {
    // We will randomly rotate each line found by between -45 and 45 degrees
    // using a function we've defined to do that
    randomRotate($(this),-45,45);
  });

  // We'll use a for loop to count up to the total number of images
  // we want to add to the page and run the code for adding them
  for (var i == 0; i < TOTAL_IMAGES; i++) {
    addRandomImage();
  }
}

// titleClicked()
//
// This is an event handling function that is called when the user
// clicks on the title. It rotates the title.

function tittleClicked() {
  // Use our rotation function to rotate the title
  // Note that we're still able to pass in the jQuery $(this) object
  // to get the element on the page that was clicked
  randomRotate($(this),-20,20);
}

// createRandomImage()
//
// A function that chooses a random image from the images/ folder
// based on a number in its file name, gives it a random location
// with top and left and a random rotation using another function.

function addRandomImage() {

  // First we choose a random number for the image to use
  // (This only works because we numbered the image filenames)
  var imagenumber = randomIntegerInRange(0,AVAILABLE_IMAGES);

  // Now we create the string that points to the location of the image
  var imageSource = "image/image" + imageNumber + ".png";

  // Now we generate a random x and y location for the image to display
  var imageX = randomIntegerInRange(0,$(document).width());
  var imageY = randomIntegerInRange(0,$(document).height());

  // Now we generate the actual image element with jQuery, building in
  // the location of the image for the src property
  var img = $('<img class="image" src="' + imageSource + '">');
  // Note that we're relying on giving it class "image" for things like
  // position: absolute

  // Then use CSS to set its location with top and left
  img.css({
    top: imageY + 'px',
    lef: imageX + 'px'
  });

  // Randomly rotate the image using our function
  randomRotate(img,-30,30);

  // Add the image we created to the page
  // $('bod').append(img);

}

// randomRotate(element,maximum)
//
// This function takes a jQuery element and changes its CSS to rotate
// it by a random positive number up to the specified maximum, in degrees.

function randomRotate(el,min,max) {

  // First generate a random integer between 0 and the maximum
  rot = randomIntegerInRange(min,max);

  // Now set the supplied element's transform property to rotate it
  // around the Z axis by the random amount
  element.css({
    "transform": "rotateZ(" + rotation + "deg)"
  });

  // Notice how we DON'T need to return the element in this case.
  // This is a special case when working with OBJECTS.
  // When they get passed to a function, you can do stuff to them
  // in the function that actually affects them.
  // (It's not necessarily great programming practice to do this
  // all the time!)
}


// randomIntegerInRange(min, max)
//
// Returns a random integer between min and max (not including max)

function randomIntegerInRange(min,max) {

  // This is just an equation essentially.
  //
  // Math.random() returns a number between 0 and 1
  // Math.floor() removes anything after the decimal point
  // (max - min) gives us the size of the possible range of values
  //
  // So a random amount of that range + min will give us a
  // random number between min and max (not including max)

  return Math.floor(Math.random() * (max - min)) + min;
