class: middle

## DART 450 | Web Intervention | Week 03
# Variables and memory

---

# Today

---

# Hard-coded values

The obvious way to put values into your code is to just type them in:

```
$('div').css({
  fontSize: '100px',
  backgroundColor: 'red',
  position: 'absolute'
});

$('div').animate({
  top: '50%'
},1000);
```
--

- But this can make your code _harder to read_ because you don't necessarily know what each value is for
- And you can't _change_ these values while your program is running
- Which is sad

---

# Enter the variable

- A variable is a place you can __store a value for later__. Whether it’s a number, a colour, a string of text, or whatever.
- You __can use a variable wherever you can use a value__.
- You can __change__ the content of a variable while your program is running, which allows for dynamic programming.
- Change is good.

---

# `var meaningOfLife = 42;`

- This is a standard variable declaration.
- We are saying that the variable called meaningOfLife will contain the value 42.
- This is the syntax in JavaScript to declare a variable. It has five parts...

---

# .codeHighlight[`var`] `meaningOfLife = 42;`

- We declare variables in JavaScript using the special word var.
- That basically means “okay, I’m going to create a place to store values now”.
- Unlike many programming languages, JavaScript does not require you to say what type of variable you are declaring. It doesn’t care if it’s a number, a string of text, or an entire webpage of information.
- It’s all just var. This can be a problem, because the computer can’t check whether we’re doing stupid things as easily...

---

# `var` .codeHighlight[`meaningOfLife`] `= 42;`

- Variables have a variable name.
- Otherwise we wouldn’t know what to call them when we use them later on in our code.
- Your variable names should be meaningful. Notably, they should explain what the variable is for.
- Also notice how variable names with multiple words are usually written with a lowercase letter first, then a capital letter for the start of each word. Do it this way unless you have a preferred standard with a good reason.

???

The rules:
- Names can contain letters, digits, underscores, and dollar signs.
- Names must begin with a letter
- Names can also begin with $ and _
- Names are case sensitive (y and Y are different variables)
- Reserved words (like JavaScript keywords) cannot be used as names

---

# `var meaningOfLife` .codeHighlight[`=`] `42;`

- The equals sign here is the assignment operator.
- In programming a single equals sign does not mean “equals”.
- It means “put the value I’m going to specify into the variable I just named”. (That is, “assignment”.)
- So in this case the assignment operator is here to put 42 into meaningOfLife.

---

# `var meaningOfLife =` .codeHighlight[`42`] `;`

- Finally we have the actual value to put into our variable.
- In this case, the Meaning of Life is defined as the integer 42.

---

# `var meaningOfLife = 42`.codeHighlight[`;`]

- One last thing, actually!
- In programming we almost always end a line of code with a semicolon like this.
- It means "I’m done with this line" effectively.
- JavaScript doesn’t actually always care if you have a semicolon at the end of a line of code.
- But put them in anyway.
- For more on the ins and outs of semi-colons: https://www.codecademy.com/blog/78

---

# `var meaningOfLife = 42;`

- So, here we have a variable declaration that creates a variable called meaningOfLife and puts 42 into it for later use.
- Note that it’s also okay to declare a variable without a value in it to start with, like this:

```
var meaningOfLife;
```

- You may now know what meaningOfLife is yet, for example.
- (If you declare a variable this way, it will still have something in it though. It will have a value called undefined in it.)

---

# What can go in a variable?

- Although JavaScript doesn’t need us to specify what type of value we’re putting into our variable, there are a specific set of possible types of value, and we should love them all.

```
var integerNumber = 42; 
var floatingPointNumber = 2.222;
 var stringOfText = “This is some text”; 
var boolean = true; // or false!
var undefinedVariable = undefined; 
var nullVariable = null;
```

- Note how there’s generally a special way of writing the different types.
- A decimal point makes a floating point number, quote marks make a String...

---

# Using a variable

Variables can be used just as if they were the value inside them:

```
$(div).animate({ top: “500px” },1000);
```

with variables, becomes:

```
var animationTime = 1000;
 var newTopLocation = “500px”; 
$(div).animate({ top: newTopLocation },animationTime);
```

At the very least, the animation line now becomes much more readable.

---

# Using a variable

```
$(div).animate({ top: “500px” },1000);
 $(p).animate({ top: “500px” },1000); 
$(span).animate({ top: “500px” },1000);
```

with variables, becomes:

```
var animationTime = 1000;
 var newTopLocation = “500px”; 
$(div).animate({ top: newTopLocation },animationTime);
 $(p).animate({ top: newTopLocation },animationTime); 
$(span).animate({ top: newTopLocation },animationTime);
```

Now if you want to change the animation position and duration, it’s much easier in the variables version.

---

# Arithmetic

- We can put more into variables than just single values, we can do things like arithmetic:

```
var add = 10 + 10; 
var subtract = 10 - 10; 
var multiply = 10 * 10; 
var divide = 10 / 10;
```

- Parentheses clarify the order of operations, just like in normal math:

```
var withParentheses = ( 10 + 10 ) * 10;
var withoutParentheses = 10 + 10 * 10;
```

---

# Arithmetic with variables

- Remember, when we use variables they get treated as the value inside them, so we can do arithmetic with variables:

```
var x = 10; 
var y = 20; 

var add = x + y; 
var subtract = x - y; 
var multiply = x * y; 
var divide = x / y;
```

- This starts to get powerful because you can see that you can _change variables based on other variables_

---

# Pop quiz, hotshots...

What’s wrong with these?

```
variable sum = 100;
  var chanceOfRain = 0.1000.10;
  var foo = 56.12;
  var priceOfEntry == “$5”;
  var today = “Tuesday;
  var yesterday = “Monday”  
var *veryImportantNumber* = 12;
```

---

# Change and time

One of the more important things about variables is that they can change over time.

```
var counter = 0;
 $('.counterDiv').on('click',function () {   
  counter = counter + 1;   
  $(this).text(counter);
 });
```

What would this do?

???

- So here, the variable counter will go up by one each time we click the HTML element with a class of '.counterDiv'.
- If we had lots of divs on a page with that class this would almost start to feel like a game?

---

# `setInterval()`

- One great JavaScript function we should take a look at is `setInterval` which gives us a kind a _timer_ on our webpage that updates regularly

```
var counter = 0; 
var updateInterval = 1000;  
setInterval(function () {   
  counter = counter + 1;
  $('#counter').text(counter);
 },updateInterval);
```

- We assume we have an element on our webpage with id of `#counter`
- So we have a `counter` variable that starts at 0
- We have an `updateInterval` of 1000ms or 1 second
- We use `setInterval` to call a function that adds 1 to `counter` every 1 second

---

# `setTimeout()`

- `setInterval()` has a sibling called `setTimeout()`
- Instead of running _over and over again_, `setTimeout` just _waits for the time you specify_ and then runs the function one time:

```
var delay = 5000;  
setTimeout(function () {   
  $('#surprise').text("SURPRISE!!!");
 },delay);
```

- Here the `setTimeout` means the code will wait for 5 seconds...
- ... and then run the function which will put 'SURPRISE!!!' into the specified element's text
- Note that for _both_ `setInterval` and `setTimeout` the code _after_ them will run immediately, they don't _stop_ the program from running until they're triggered

---

# JavaScript objects

- There’s one other kind of variable to mention in part here, and that’s the object, which, at its most basic, looks like this:

```
var coordinates = { x: 10, y: 20 };
```

or the same, but nicer (according to me):

```
var coordinates = {   
  x: 10,   
  y: 20
 };
```

- That is, a JavaScript object can store multiple variables together inside it, which can be nice and tidy.
- We call the variables inside the object _properties_

---

# jQuery uses objects

- In fact, you’ve been seeing these basic objects in jQuery, notably when you set multiple CSS properties:

```
$('div').css({   
  backgroundColor: 'red',   
  color: 'green',   
  position: 'relative'
});
```

- Here all the CSS properties we want to set are _in an object_
- Each CSS property is written out as a _property_, a _colon_, and a _value_ in the object
- The multiple properties in the object are _separated by commas_

---

# jQuery selection returns objects

- When we select one or more elements on a page, the thing jQuery returns is a JavaScript Object (specially created by jQuery)
- `$('div')` gives us a jQuery object containing all the `div` elements on our page
- When we use jQuery's functions on a selection, we're _using that object_
- `$('div').css({ color: 'red'});` gets a jQuery object with all the `div` elements, the `.` allows us to talk to the object and call a function it knows about, called `css()`

---

# We can store selections in variables

- We can save jQuery selections into variables
- When we do, it's convention to store jQuery selections into variables that start with a `$` to indicate the type of variable

```
$allDivs = $('div');
```

- Now the variable `$allDivs` contains the selection of every `div` on our page
- We can then run all the usual jQuery functions on it

```
$allDivs.css({backgroundColor: '#f33'});
$allDivs.on('click',function () {
  $(this).animate({
    backgroundColor: '#3ff'
  },1000);
});
```

---

# Remembering between browser sessions

- Normally variables _vanish_ when you reload a page or come back to it later
- That's fine a lot of the time, but you might want to _save_ them in the user's browser to remember things that happened
- We can do this with a special feature of browsers called `localStorage`
- `localStorage` lets us save values between sessions

---

# `localStorage.setItem()`

- To _save_ data to `localStorage` we use `setItem()` like this

```
var userAge = $('#ageInput').val(); // Put the age in a variable
localStorage.setItem('savedAge',userAge); // Save the age to the browser
```

- In the first line we put the value of an input field into a variable (presumably the user has typed their age in)
- In the second line we _save_ the value of that variable (`userAge`) into the `localStorage`, also calling it `savedAge` so we can get it back later

---

# `localStorage.getItem()`

- To _load_ data from `localStorage` we use `getItem()` like this

```
var savedAge = localStorage.getItem('savedAge');
$('#ageDisplay').text(savedAge);
```

- In the first line we _load_ the value in `localStorage` called `savedAge` (from the previous slide) and assign it to our new variable `savedAge`
- In the second line we _display_ the `savedAge` variable's value in an element with id `#ageDisplay`

---

# That's `localStorage`!

- `localStorage` is fun because it allows your webpages to have a _memory_ for specific users
- You can ask them for information (or just _take it from them!_), save it, and then use it when they come back
- Naturally this has undertones (overtones?) of _surveillance_?
- Play with it!

---

# Where are we?

- _Variables_ are named placed we can store _values_
- They can store integers, floating point numbers, strings of text, boolean true/false values...
- ... and JavaScript Objects which collect together _more_ variables called properties
- We can use _assignment_ and _math operations_ with variables to change them
- Variables can _change over time_ to create dynamc behaviour with functions like mouse events, `setInterval()`, `setTimeout()`...
- We can _save values between sessions_ with `localStorage`

---

# Examples

https://github.com/pippinbarr/dart450-2018/tree/master/examples/week03

- Let's look at a couple of pre-made examples
- We should change them if we want to
- We can also write something (simple) from scratch if we want to
