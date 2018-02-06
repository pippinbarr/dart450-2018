class: middle

# DART 450 | Web Intervention | Week 05
## Loops and arrays

---

# A quick comment on commenting

- When we write code it can be confusing to ourself and _very_ confusing to other people
- Part of the solution is using _good names_ for our variables (and functions)
- Part of the solution is learning how to write more nicely structured code (with things like loops!)
- And part of the solution is _commenting_, writing little messages in the code that _explains what it does_
- In programming languages (and in HTML and in CSS) we use special symbols before (or around) text to indicate it's _not part of the program_ but is a _comment_

---

# HTML and CSS

- You've probably already seen comments in HTML:

```html
<!--- This is an HTML style comment -->
```

- And in CSS

```css
/* This is a CSS style comment */
```

- When we write comments in HTML and CSS they are _ignored_ by the browser, they're just a message inside the code itself

---

# JavaScript comments

- In JavaScript there are two flavours.
- Single-line comments look like this

```
// This is a JavaScript single-line comment
```

- And multi-line comments look like this

```
/*
This is a JavaScript
multi-line
comment
*/
```

---

# What to write?

- You will have seen extensive use of both kinds of comments in all my example code, and that's a useful place to look for a model of commenting
- The basic idea is that you should write a comment for any line or lines of code that _you find complex_ or that _someone else might find complex_
- You comment should _explain_ the line(s) of code in plain English (or French) so that the person reading your code can more easily understand what you're doing
- When in doubt, add a comment
- It's also best-practice to always include a _description comment_ at the top of your files that explain what the _overall program_ does

---

# A quick message about commit messages

- Part of the grading rubric in this course is about making sure you have _multiple commits_ in your repository for a project (this includes the midterm) and that each commit has a _descriptive message_ about what you did
- Generally speaking your should _commit_ code whenever you add something to your project that _works_ and makes a difference to the project (e.g. changes to the CSS for better aesthetics, a new click function that makes a div move off screen, new elements in the HTML that are accessed by the JavaScript, etc.)
- I'll be more gentle about this for the midterm, but it will be significant for the final project

---

class:middle
# Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops Loops

---

# Repeating yourself

- We’ve already seen how important and powerful repetition is in programming.
- `setInterval()` lets us repeat some code over and over again with set timing.
- `window.requestAnimationFrame()` lets us execute code each frame of animation in the browser.
- But it can also be useful to repeat code not over time, but all at once within the program flow.
- Computer are all about doing repetitive tasks for us!

---

# The grid

- Let’s say we want to create a big grid of similar divs on our webpage.
- This is the kind of thing we might want to be able to do to dynamically generate page content for example
- One way would be to go into the HTML and type them (or cut and paste) them all in...
- See `examples/week05/thegrid`
--

- It works, but it's kind of painful and clearly involves me doing boring work a computer should be doing...

---

# The grid, now with jQuery!

- Another way would be to dynamically create the divs in jQuery and insert them into the page...
- jQuery has the ability to _create_ elements like this

```
var $newDiv = $('<div></div>');
```

- And the ability to _append_ them to the page like this

```
$('body').append($newDiv);
```

- See `examples/week05/thegridlooplessjquery`
--

- Impressively, this is sort of _worse_ that just doing it in HTML! I gave up after seven!

---

# This is bad

- Clearly these are bad ways to add a bunch of divs to our webpage.
- We have to write at least a line of code (HTML or JavaScript) for every div we want to add.
- What if we wanted a thousand of the damn things?!
- Programming is about making our lives easier (usually), so isn't there a way to just say "do this similar thing over and over”?
- Yes. It’s called a loop.

---

# `while` you're here...

```
while (condition) {   
  // Do this 
}
```

- This is a while loop.
- It will execute the code inside the curly brackets over and over again while `condition` is true.
- When `condition` becomes false, it will stop and the program will continue from there.
- It’s a lot like an `if` statement that happens over and over until the `condition` becomes false.

---

# Breaking it down...

```
while (condition) {   
  // Do this 
}
```

- We start with the word `while` to identify that it's going to be a `while` loop

---

# Breaking it down...

```
while (condition) {   
  // Do this 
}
```

- Then we specify the _condition_ for our loop inside _parentheses_
- This is exactly the same kind of condition we use with an `if` statement, so it usually involves maths of some kind in the end
- In this case the `while` loop is going to run over and over until this condition is `false`
- For as long as it's `true` the loop goes on, and on, and on, and on, ...

---

# Breaking it down...

```
while (condition) {   
  // Do this 
}
```

- Finally we have the _code to run each time through the loop_ inside _curly brackets_
- Again, this is like an `if` statement - you group all the code that's going to run as part of the while loop inside curly brackets
- That code will keep happening repeatedly until the condition is `false`

---

# Back to the grid

- So, clearly a loop can take care of the repetitive nature of making those divs in our grid
- It'll need to look something like...

```
while (the divs aren't all added yet) {
  add a div to the page
}
```

- But obviously that's not going to work like that
- We need to write it in a way the computer understands

---

# The keys to a loop

There are three main things you need to establish when you’re using a loop:

- __Start condition__. What is the situation you start off in?  (The divs haven’t been added.)
- __Stop condition__. What is the situation when you should stop?  (All the divs have been added.)
- __Action__. What should you do each time through the loop?  (Add one div to the page.)

---

# And back to the grid again...

- So we need something like

```
var totalDivsToAdd = 10; 
var divsAdded = 0; 

while (divsAdded < totalDivsToAdd) {   
  var $div = $('<div></div>');
  $('body').append($div);
  divsAdded = divsAdded + 1; 
}
```

- See `examples/week05/thegridloopedjquery`

---

# Trick question

What will this do?

```
$(document).ready(function () {   
  var currentDivTop = 0; 
  var targetDivTop = 1000;
  $(‘div’).css(‘position’,’absolute’);   
  while (divTop < targetDivTop) {     
    $(‘div’).css({       
      top: divTop + ’px’     
    });     
    divTop += 10;   
  } 
});
```
--

- Surprisingly enough, this one is a trick
- It's easy to think the div will _move down the page_ while we watch
- But the `while` loop happens _all at once_ (in a single frame, if you like), so you don't see while it happens, just the result

---

# To infinite loop, and... beyond?

- You have to be careful with loops:

```
while (true) {   
  console.log('Still true...');
 }
```

- This is an infinite loop. It never stops.
- It will effectively freeze up your webpage (and your computer sometimes!)
- Sadly, infinite loops aren’t always as obvious as this one. If your page seems to do nothing and freeze, it’s could be an infinite loop.
- One quick debugging approach would be to put a `console.log()` in your loop and see if it’s just printing out forever...

---

# Counting

- A huge amount of the time what we want a loop to do is just perform some action a specific number of times (like with our grid of divs).
- There’s a specific kind of loop that does exactly this.
- It’s called a `for` loop.
- It has a kind of creepy syntax, so get ready...

---

# `for` loop

```
for (var i = 0; i < 10; i++)  {   
  console.log("i is " + i); 
}
```

- This is a for loop that counts from 0 up to 9 and prints out each number in the form "i is 0”, "i is 1”, i is 2” and so on...
- Let’s look at the pieces of this...

---

# `for` loop

```
for (var i = 0; i < 10; i++)  {   
  console.log("i is ",i); 
}
```

- We start with the word `for` because it's...
--

- A `for` loop.

---

# `for` loop

```
for (var i = 0; i < 10; i++)  {   
  console.log("i is ",i); 
}
```

- Next we have all the _conditions_ the loop needs inside parentheses
- But now there is _more than one_ and they are separated by _semicolons_! Ugh!
- So, what are they?

---

# `for` loop

```
for (var i = 0; i < 10; i++)  {   
  console.log("i is ",i); 
}
```

- First we have `var i = 0`
- This is the _starting condition_ we talked about earlier
- It sets up a variable at the _beginning_ of the loop
- And we'll use that variable to work out when to _stop_

---

# `for` loop

```
for (var i = 0; i < 10; i++)  {   
  console.log("i is ",i); 
}
```

- Then we have `i < 10` (after a semicolon)
- This is like the _stopping condition_ we talked about earlier, except really it's the "keep going condition"
- This uses the variable we set up inside a _conditional statement_
- If this statement is `true` the loop runs through again
- If this statement is `false` the loop stops

---

# `for` loop

```
for (var i = 0; i < 10; i++)  {   
  console.log("i is ",i); 
}
```

- Finally in the parentheses we have `i++` (after another semicolon)
- This adds `1` to `i` at the _end_ of each loop through
- Because the _stopping condition_ relies on `i`, this is what means the loop will eventually _stop_
- `i` is often called the `iterator` for this reason - it _iterates_ through a set of numbers, eventually causing the loop to stop

---

# `for` loop

```
for (var i = 0; i < 10; i++)  {   
  console.log("i is ",i); 
}
```

- And finally, of course, we have the _code to run_ each time through the loop inside our curly brackets

---

# `for` loop

```
for (var i = 0; i < 10; i++)  {   
  console.log("i is ",i); 
}
```

- So time in the loop goes like this:

1. `var i = 0` at the start of the loop, only _once_
2. `i < 10` gets checked - if it's `true`, the loop goes on, if not the loop _stops_
3. If the condition was true, the code in the loop is executed, which is `console.log("i is ",i);` in this case
4. `i++` is executed, making `i` go up by one
5. We go back to step 2 to check the condition again, and on and on we go...

---

# Other kinds of `for`

- You can change the expressions in the `for` loop's conditions to get different behaviours...

```
// Count UP from 0 up to 9 in increments of 1
for (var i = 0; i < 10; i++) {
}

// Count DOWN from 20 to 1 in increments of 1
for (var i = 20; i > 0; i--) {
}

// Count UP from 0 to 100 in increments of 10
for (var i = 0; i <= 100; i+=10) {
}
```

- And so on.
- You can do pretty much whatever you want so long as you make sure you have a start condition, an end condition, and some useful update statement that will make the end condition `false` at some point.

---

# The main kind of `for`

- You can definitely do all those fancy other approaches to `for` loops
- But the vast, vast majority of the time you will see loops like the one we focused on earlier:

```
for (var i = 0; i < someNumber; i++) {
  // Do something
}
```

- That is, a loop that counts from `0` up to (and not including) `someNumber` and executes code for each step of the way

---

# `for === while`

- Any `for` loop can be written as a `while` loop (but not always vice versa)

```
for (var i = 0; i < 10; i++) {
  console.log(i);
}

var i = 0;
while (i < 10) {
  console.log(i);
  i++;
}
```

---

# The grid with a `for` loop

```
var totalDivsToAdd = 10; 

for (var i = 0; i < totalDivsToAdd; i++) {
  var $div = $('<div></div>');
  $('body').append($div);
}
```

- Nice and tidy
- Generally if you're just wanting to execute code some defined number of times, a `for` loop will tend to be more elegant
- See `examples/week05/thegridforloopedjquery`

---

# The grid with a `for` loop using `i`

```
var totalDivsToAdd = 10; 

for (var i = 0; i < totalDivsToAdd; i++) {
  var $div = $('<div>' + (i+1) + '</div>');
  $('body').append($div);
}
```

- Often in a `for` loop we _use_ `i` in some capacity
- In this simple case we can _number_ our divs from 1 to 10
- See `examples/week05/thegridforloopedwithijquery`

---

class:middle
# Arrays

---

# What are arrays?

- Arrays are the most common "data structure" you'll see in programming
- They are essentially a way to store a _set_ of values together in a specific _order_
- Arrays are a bit like a set of numbered boxes

---

# Creating an array

- The easiest way to make an array is to create it with values already inside, like this

```
var myArray = [10,15,20,17,12,5,2,8,9,2];
```

- This gives us an array with a set of 10 slots/boxes, but with numbers already stored in them.
- (Like variables, an array can have any type of value in its slots - you can even mix and match, which is probably dangerous!)

![](images/arrayvalues.png)

---

# What goes where?

```
var myArray = [10,15,20,17,12,5,2,8,9,2];
```

- It's great to have these boxes with numbers in them, but we need a way to tell _which box is which_ so that we can, for example, get a number back out...
- Fortunately, the slots in an array (which are called _elements_) are _numbered_
- From `0` up

![](images/arraynumberedvalues.png)

---

# What's in the box?

```
var myArray = [10,15,20,17,12,5,2,8,9,2];
```

- We refer to a specific numbered slot in an array using square brackets, so we access the _element_ numbered with `6` by writing:

```
myArray[6]
```

- Which is?

![](images/arraynumberedvalues.png)
--

- That's right! It's `2`

---

# Putting something in the box

- We can use these references to array elements exactly like variables.

![](images/arraynumberedvalues.png)

```
myArray[5] = myArray[2] + 20;
```


--

![](images/arraychanged.png)

- It changes element 5 to have the value in element 2 plus 20!

---

# Anything goes! (Into arrays!)

- Arrays don’t have to have integers in them, as we said earlier

```
var myFloats = [1.2,2.44,3.1415,0.12,-0.9];  
var myStrings = ["Hello”,”Ciao”,”Salut”];
  var myBooleans = [true,false,true,true,false];
```

- We can put anything that can go into a variable into an array, in other words.
- They’re just sets of numbered variables all kept together in one place.

---

# Objects in arrays!

- It gets even more "data-like" if you put _objects_ in an array:

```
var people = [
  {
    name: 'John',
    age: 32
  },
  {
    name: 'Jane',
    age: 26
  },
  {
    name: 'June',
    age: 88
  }
];
```

- Notice how we can use newlines to make this array more readable in code
- That's starting to look like a simple database!

---

# Data

- So, an array is a _data structure_ that stores a set of data in order
- We can refer to the data by element number
- And we can change the data by element number
- Arrays also play very nicely with `for` loops!

---

# `for` looping through an array

- `for` loops are particularly great at counting from `0` up to stop stopping point
- Arrays are sets of elements numbered from `0` up to a specific `length`
- We can get the length of an array like this `myArray.length`, so...

```
var people = [{name: 'John',age: 32},{name: 'Jane',age: 26},{name: 'June',age: 88}];

for (var i = 0; i < people.length; i++) {
  $div = $('<div></div>');
  var textToAdd = people[i].name + ": " + people[i].age;
  $div.text(textToAdd);
  $('body').append($div);
}
```

- That is, we can create content for our webpage based on the _data_ in our array
- See `examples/week05/simpledatabase`

---

# Choosing a random element in an array

- Something that is often useful is being able to choose a random element in an array
- We know that `Math.random()` returns a random number between `0` and `1`
- We know that the _length_ of an array can be accessed with `.length`
- And we now learn that `Math.floor()` converts a floating point number to an integer by removing everything after the decimal point
- That means we can get a random element out of an array...

---

# Choosing a random element in an array

```
// Declare our array of colours (strings with hex values)
var colours = ['#ff0','#f0f','#0ff','#abc','#010','#ccc','#fad'];

// Choose a random element index
var randomIndex = Math.floor(Math.random() * colours.length);

// Get the colour at that index
var randomColour = colours[randomIndex];

// Set the background-colour of our page to that colour
$('body').css({
  backgroundColor: randomColour
});
```

---

# Running through an array over time

```
// Declare our array of colours
var colours = ['#ff0','#f0f','#0ff','#abc','#010','#ccc','#fad'];
// Start at element 0
var currentColour = 0;
// Set the background to that colour
$('body').css({ backgroundColor: colours[currentColour] });

// Create a 'next' button
$button = $('<button>Next</button>');
// Add it to the page
$('body').append($button);

// Add a click event to the button
$button.on('click',function () {
  // When clicked, increase our element index by one
  currentColour = currentColour + 1;
  // Make sure it doesn't go beyond the end of the array!
  if (currentColour >= colours.length) {
    currentColour = 0;
  }
  // Set the background colour
  $('body').css({ backgroundColor: colours[currentColour] });
});
```

---

# The `.each()`ing

- jQuery lets us loop through all elements in a specific selection to run the same code for each one
- We could use the following to give _each_ div a random background colour...

```
var colours = ['#ff0','#f0f','#0ff','#abc','#010','#ccc','#fad'];

$('div').each(function () {
  // Choose a random element index
  var randomIndex = Math.floor(Math.random() * colours.length);
  // Get the colour at that index
  var randomColour = colours[randomIndex];
  // Set the background-colour of our div to that colour
  $(this).css({ backgroundColor: randomColour });
});
```

---

# That's a lot (as per usual)

The main take-aways here are:

- _Commenting_ is a super important part of good programming practice. It's fine to add your comments _at the end_ so long as you actually add them!
- _Loops_ are great for repetitive actions, so if you find yourself repeating the same (or very similar) code over and over again, you may need a loop
- _Arrays_ store (related) values as ordered, numbered elements all together inside a single variable and can be used as a very simple kind of database
