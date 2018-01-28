class: middle

# Conditionals
### DART 450 | Web Intervention | Week 04

---

# Another time...

- We've seen `setTimeout()` (do something after a delay)
- We've seen `setInterval()` (do something repeatedly at an interval)
- But there's one extra time-related function that's worth knowing about:

```
$(document).ready(function () {
  window.requestAnimationFrame(update);
});

function update() {
  $('div').css({
    position: 'absolute',
    left: '+=1'
  });
  window.requestAnimationFrame(update);
}
```

---

# `window.requestAnimationFrame()`

```
$(document).ready(function () {
  window.requestAnimationFrame(update);
});

function update() {
  $('div').css({
    position: 'absolute',
    left: '+=1'
  });
  window.requestAnimationFrame(update);
}
```

- `window.requestAnimationFrame(update);` is asking the webpage to run the _function_ called `update()` on the next animation frame of the page
- We define the `update()` function ourselves
- In `update()` we change the position of all `div` elements by 1 pixel to the right
- And then call `window.requestAnimationFrame(update)` _again_ so that we do the same thing on the _next_ animation frame too

---

# `window.requestAnimationFrame()`

- It's a lot like using `setInterval()` with an interval so small it gets called each animation frame
- It's also a good example of how writing our own _functions_ can be a helpful organising tool
- We'll come back to them later on in the course

---

# You _can_ handle the truth!

- The ideas of `true` and `false` are central to our general understanding of the world
- Of course, in reality, working out what's `true` and what's `false` is quite difficult
- But in programming, things are a _lot more certain_
- Probably something to do with all those 1s and 0s floating around in there...

---

# Decisions, decisions....

- One way we use the ideas of `true` and `false` is that we use them to _make decisions_
- We say things like "_if_ the metro stays broken down for two more minutes _then_ I'm going to get off and walk home"
- That is, we're going to _do something_ based on whether a statement turns out `true` or `false`

---

# From context to action

- This idea of going from _knowing something_ to _doing something_ is at the heart of what makes programming and software interesting
- This is a huge part of what makes programs _react_ to context, instead of just doing the same thing every time
- They might react to the weather, or the date, or the keyboard, or something else...
- ... but in all cases they need to use these "_if_ this _then_ I'll do that" kinds of structures

---

# Some ifs...

- If the user presses an arrow key, move the elements on the page in that direction
- If the date is the 25th of December, play a Christmas Carol
- If the weather is cloudy, making the webpage grey and hard to read
- If the user is shouting, making the elements on the page vibrate
- AND SO ON!

---

# What is `true`? What is `false`?

- In programming we talk about things that can be `true` or `false` as _conditional expressions_ and they're often kind of like maths:

`23 < 24` is `true`  
`1 + 1 == 3` is `false`

- We use these kinds of expressions to _check what's happening_ in our code, and then react to it
- Usually it's better if we use variables!

`temperature > 36` would be `true` if it's a really hot day...

---

# Conditional operators

- We make _conditional expressions_ with _conditional operators_ and the main ones are:

```
1 < 2 // Less than
2 > 1 // Greater than
1 <= 2 // Less than or equal to
2 >= 1 // Greater than or equal to
1 != 2 // Inequality
1 == 1 // Equality
```

- See? Maths. All the above are `true`
- Note that this means we are very often checking _numbers_ with these operators

---

# Getting iffy

- So how do we _use_ these conditional expressions to check what's going on in our program?
- We use `if` statements
- An `if` statement _checks_ if a condition is `true`, and will do something based on the result

---

# A basic `if` statement

```
if ($(window).width() < 400) {
  $('body').css({ backgroundColor: 'red' });
}
```

- This is an `if` statement that checks whether the current width of the browser window is less than 400 pixels
- And if it _is_, it makes the background of the page black
- Let's break it down...

---

# A basic `if` statement

```
if ($(window).width() < 400) {
  $('body').css({ backgroundColor: 'red' });
}
```

- First we have the word .codeHighlight[`if`]
- This is what tells Processing we're going to use an `if` statement
- It kind of means we're about to _ask a question_

---

# A basic `if` statement

```
if ($(window).width() < 400) {
  $('body').css({ backgroundColor: 'red' });
}
```

- Next we have .codeHighlight[`(`], an opening parenthesis
- We've seen this before when calling jQuery _functions_ where we were saying "I'm going to tell you the information"
- This time it's similar, but it means "I going to tell you the _condition_ I want you to check"
- So parentheses tend to mean "I'm going to give you information to help you do your job"

---

# A basic `if` statement

```
if ($(window).width() < 400) {
  $('body').css({ backgroundColor: 'red' });
}
```

- Next we have .codeHighlight[`$(window.width() < 400`], our _condition_
- This is _the thing we want to check_
- We want to know if it's `true` or `false`
- In this case we're asking "is the window's width less than 400 pixels?"

---

# A basic `if` statement

```
if ($(window).width() < 400) {
  $('body').css({ backgroundColor: 'red' });
}
```

- Then we have .codeHighlight[`)`], a closing parenthesis
- That is, "I'm done telling you what to check!"

---

# A basic `if` statement

```
if ($(window).width() < 400) {
  $('body').css({ backgroundColor: 'red' });
}
```

- Now we have .codeHighlight[`{`], an opening curly bracket!
- Like in a _function_ this means "Now I'm going to tell you _what to do_!"
- But in this case it specifically means "Now I'm going to tell you what to do _if that condition is `true`_"

---

# A basic `if` statement

```
if ($(window).width() < 400) {
  $('body').css({ backgroundColor: 'red' });
}
```

- Now we have the actual code we want to run _if the condition is true_
- In this case we just want to make the background red with our jQuery `css()` function
- But we could do _anything_ in here!
- _ANYTHING!!!_
- And we can have _as many lines of code as we want in here_

---

# A basic `if` statement

```
if ($(window).width() < 400) {
  $('body').css({ backgroundColor: 'red' });
}
```

- Finally we have .codeHighlight[`}`], a closing curly bracket
- That is, "I'm done telling you what do if that condition is `true`"
- As you can see, we use _curly brackets_ to surround _blocks_ of code that belong together
- In this case the curly brackets are around _all the code to run if the condition is true_

---

# What `else`?

- Of course we might not _only_ want to react to the condition being `true`
- We may also want to do something only if it's `false`
- And for this we can extend the `if` statement with an `else` to do just that

---

# An `if else` statement

```
if ($(window).width() < 400) {
  $('body').css({ backgroundColor: 'red' });
}
else {
  $('body').css({ backgroundColor: 'yellow' });
}
```

- Here we have the same `if` statement, but now with a bit extra after the closing curly bracket of our original `if`

---

# An `if else` statement

```
if ($(window).width() < 400) {
  $('body').css({ backgroundColor: 'red' });
}
else {
  $('body').css({ backgroundColor: 'yellow' });
}
```

- First we have the word .codeHighlight[`else`]
- This signals that we're going to deal with the case where the condition turns out to be `false` (aka _not `true`_)
- In this case, that means when the window width is _greater than or equal to_ 400 pixels

---

# An `if else` statement

```
if ($(window).width() < 400) {
  $('body').css({ backgroundColor: 'red' });
}
else {
  $('body').css({ backgroundColor: 'yellow' });
}
```

- Then we have our friend .codeHighlight[`{`], the opening curly bracket
- Which means "Now I'm going to tell you what to do if the condition is false"
- Note that we _don't_ need parentheses, because we don't need _new information_ here
- We're still relying on the information in the original condition

---

# An `if else` statement

```
if ($(window).width() < 400) {
  $('body').css({ backgroundColor: 'red' });
}
else {
  $('body').css({ backgroundColor: 'yellow' });
}
```

- Then we have the code we want to run when the condition is `false`
- In this case the jQuery `css()` function to make the background yellow

---

# An `if else` statement

```
if ($(window).width() < 400) {
  $('body').css({ backgroundColor: 'red' });
}
else {
  $('body').css({ backgroundColor: 'yellow' });
}
```

- Finally we have .codeHighlight[`}`], the closing curly bracket
- This says "I'm done telling you what to do if the condition is false"

---

# But what if...

- Sometimes we might want to get even more complicated
- Often, even!
- We might want to check _another_ condition if the first one is `false` instead of _only_ deciding based on the first condition
- And we can...

---

# An `if else if` statement

```
if ($(window).width() < 400) {
  $('body').css({ backgroundColor: 'red' });
}
else if ($(window).width() < 600) {
  $('body').css({ backgroundColor: 'green' });
}
else {
  $('body').css({ backgroundColor: 'yellow' });
}
```

- So we can have _another if_ after our else that will check _another condition_
- Note that it will _only_ check that second condition _if_ the first condition is `false`, right?
- And note we can still have an `else` at the end that handles if _both_ the conditions are `false`

---

# An `if else if` statement

```
if ($(window).width() < 400) {
  $('body').css({ backgroundColor: 'red' });
}
else if ($(window).width() < 600) {
  $('body').css({ backgroundColor: 'green' });
}
else {
  $('body').css({ backgroundColor: 'yellow' });
}
```

- What do you figure this will do?
--

- Yeah, it will make the background _red_ if the window is less that 400 pixels wide, _green_ if it's between 400 and 600 pixels wide, and _yellow_ if it's larger than that...
--

- Interesting how the code is kind of _easier_ to read than that.

---

# `if else if else if else if...`

```
if ($(window).width() < 200) {
  $('body').css({ backgroundColor: '#fff' });
}
else if ($(window).width() < 400) {
  $('body').css({ backgroundColor: '#ddd' });
}
else if ($(window).width() < 600) {
  $('body').css({ backgroundColor: '#bbb' });
}
else if ($(window).width() < 800) {
  $('body').css({ backgroundColor: '#999' });
}
else {
  $('body').css({ backgroundColor: '#777' });
}
```

- This can go on for a while!

---

# What if also this other thing?

- Because we can put whatever instructions we want inside the curly brackets of an `if` statement...
- ... we could put another `if` in there!
- That is, having checked one condition is true, we might want to check another condition after that...

---

# `if` this thing _and_ `if` this other thing

```
if ($(window).width() < 300) {
  if ($(window).height() < 300) {
    $('body').css({ backgroundColor: '#f00' });
  }
}
```

- There we have it, _another_ `if` statement _inside_ the first `if` statement, this is called _nesting_ the `if`s
- Now the background colour will only change if we pass _both_ tests
- So the window width has to be less than 300 pixels
- _And_ its height has to be less than 300 pixels too!

---

# Nice

- This is getting kind of cool
- It's clear we can check really _specific_ conditions
- Which helps give our program a kind of personality
- It's like it _cares_ about really particular things being true (or false)

---

# Cold, hard logic

- Sometimes we need to check more complicated ideas than we can express in a math-style condition
- To help out, programming uses _logic operators_

`&&` means AND  
`||` means OR  
`!` means NOT

- Kind of nice, since this is _literally_ how computers work at the circuit level!
- But how does this work in code?

---

# Logically speaking...

.codeHighlight[`(condition1 && condition2)`]  
This is `true` if _both_ `condition1` and `condition2` are `true`, otherwise it is `false`.

.codeHighlight[`(condition1 || condition2)`]  
This is `true` if _either_ `condition1` _or_ `condition2` are `true`, otherwise it is `false`.

.codeHighlight[`(!condition)`]  
This is `true` if `condition` is `false`, and `false` if it's `true`.

---

# In practice

```
if ($(window).width() < 300 && $(window).height() < 300) {
  $('body').css({ backgroundColor: '#f00' });
}
```

- We can recreated the _nested `if`s_ from before using `&&` this time
- The background will be black if the mouse is in the right half AND in the bottom half of the window

---

# In practice...

```
if ($(window).width() > 300 || $(window).height() > 300) {
  $('body').hide();
}
else {
  $('body').show();
}
```

- We can check multiple possibilities in one line now

---

# Pop-quiz!

What will this do?

```
if (2 > 0 || 10 < 9) {
  console.log("Go Cowboys!");
}
else if (10 < 20 && 9 <= 9) {
  console.log("Go Giants!");
}
if (!(10 > 0 && 9 < 10)) {
  console.log("Go Whoever!");
}
```

???

Go Cowboys!

---

# There is so much we can check now...

```
$('#input').keypress(function (event) {
  if (event.which == 115) {
    var newTopOffset = $('#input').offset().top + 10;
    $('#input').offset({
      top: newTopOffset
    });
  }
});
```

- And this is where conditionals are so helpful. We can check what has happened and react to it.
- The power is being able to write code that “knows what happened”.

---

# Random numbers

- JavaScript has a function called `Math.random()` that returns a random number between `0` and `1`
- It's great for generating random numbers in specific ranges, such as a location on the page...

```
$('div').each(function () {
  var randomX = Math.random() * $(window).width();
  var randomY = Math.random() * $(window).height();
  $(this).css({
      position: 'absolute',
      top: randomY,
      left: randomX
  });
});
```

---

# Probability...

- One feature of of `Math.random()` is that it has a _uniform distribution_
- That means each possible result is just as likely as any other
- The means that you will get a number less than `0.1`, for example, 10% of the time
- With conditionals, that means we can do probability...

```
var probability = Math.random();
if (probability < 0.1) {
  $('body').text("You win!!!");
}
else {
  $('body').text("You lose.");
}
```

---

# jQuery Filtering

- jQuery itself adds a layer onto the idea of conditionals
- There are a number of functions that let us refine our selection through conditional filters
- See: https://api.jquery.com/category/traversing/filtering/

```
$('.class').not('.notThisClass') // Selects all elements with .class but not .notThisClass
$('.class').first() // Selects the first element in the set with .class
$('.class').last() // Selects the last element in the set with .class
$('.class').filter('.andThisClass') // Elements with .class as well as .andThisClass
$('.class').has('.childClass') // Elements with .class with a descendent with .childClass
```

- There are more in the documentation, and the `sixshooter` example in `examples/week04/` has examples of using these

---

# Food for thought...

- Now we can make _decisions_ in our code based on _context_ and _input_
- This is a huge step because it means our programs can _behave differently_ based on what happens
- But be aware that this is a double-edged sword... it can be very tempting to think of programming as _if this then that otherwise that but if this then that other thing unless this in which case that and then that..._
- But in fact that quickly gets out of hand
- Over time we learn to create _structures_ in our code that can handle wide varieties of situations with less code
