class: middle

## DART 450 | Web Intervention | Week 02
# jQuery

---

# Today

- Introducing JavaScript and Libraries
- The jQuery library
- Setting up web project with jQuery
- jQuery for selection and manipulation
- jQuery events
- More jQuery functions
- Minimalist debugging

---

class: middle

# JavaScript and jQuery

---

# JavaScript

- Introduced in 1995, still going strong
- An interpreted programming language
- The language of interactivity on the web
- An important programming language in general
- Nothing at all to do with the Java programming language

---

# (JavaScript) Libraries

- When programming we try not to reinvent the wheel
- Libraries are collections of code that provide pre-packaged effects
- Different libraries have different specialisations
- You can find libraries for working with typography, videogames, voice recognition, face recognition, scrolling-based interaction, and on and on
- A library is generally just a JavaScript file with code in it

---

# jQuery (is a JavaScript library)

- jQuery is a JavaScript library for manipulating HTML and CSS dynamically
- It designed to let us __select__ specific elements on a page and to __manipulate__ their properties easily
- Let's see how it works with a simple webpage

---

# `index.html`

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta http-equiv="content-type" content="text/html; charset=utf-8">
  <title>Example webpage</title>
  <link rel="stylesheet" type="text/css" href="css/style.css" />
</head>

<body>
  <div id="exampleDiv">Magnificent!</div>

  <label id="exampleLabel" for="exampleInput">Input:</label>
  <input id="exampleInput"></input>
  <button id="exampleButton">Button</button>

  <div class="exampleClass bold">This,</div>
  <div class="exampleClass">that,</div>
  <div class="exampleClass bold">and the other thing.</div>
</body>
</html>
```

---

# `style.css`

```css
body {
  margin: 20px;
  font-family: Helvetica, sans-serif;
}
#exampleDiv {
  font-size: 3em;
  font-weight: bold;
  margin-bottom: 20px;
}
#exampleLabel,#exampleInput,#exampleButton {
  font-size: 1.5em;
  margin-right: 1em;
  margin-bottom: 1em;
}
.exampleClass {
  text-decoration: underline;
}
.red {
  color: red;
}
.bold {
  font-weight: bold;
}
```

---

# Adding scripting to a web project

- To work with JavaScript in our projects we will link to a `script.js` script file using a `<script>` tag in our `.html` files
- So first we add a folder to our project called `js/`
- Then we create our empty `script.js` file inside that folder
- Then we link to the script with the following at the bottom of our `<head>` tag

```html
<script src="js/script.js"></script>
```

---

# Now we're ready to write JavaScript!

- If we knew JavaScript we could write code in `script.js`
- Buuuut, we don't yet
- And we specifically want to use jQuery, which is a _library_ that works with JavaScript
- So let's get that...

---

# Adding jQuery to a web project

- To work with jQuery specifically, we need to link to the library itself
  1. We can use a CDN (Content Delivery Network) that hosts the library file for us
  2. We can download the library file ourselves and keep it in our `js` folder
- For this course we will go with option 1
- At https://developers.google.com/speed/libraries/ we can get the appropriate `<script>` tag format for the latest version of jQuery:

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
```

- We put this in `index.html` __above__ our own `<script>` tag so jQuery loads first

---

# In summary

- We're now ready to work with jQuery!
- We have an `index.html` with `<script>` tags pointing to the jQuery library in a CDN and to our own `js/script.js`
- We have a `css/style.css` to define the appearance of our page
- It remains to write jQuery code in `script.js` that makes something happen!

---

# Ready?

- When using jQuery we almost always use a specific structure that makes sure the webpage is fully loaded before we apply our code
- It's called "document ready" and looks like this in our `script.js`

```
$(document).ready(function () {
  // All our code goes in here!
});
```

- By writing our code inside the curly brackets of "document ready" we're guaranteed that the document (webpage) is _ready_ for it to run
- Now that we're programming, note that all those parentheses and curly brackets are _really important_
- If you miss one or have one extra, things break. (We'll get used to it.)

---

# jQuery is about _selection_

- The way we almost always use jQuery is that we use it to _select_ some specific element or set of elements on our webpage
- We most often use _CSS selectors_ to do so, and it looks like this

```
$('#exampleDiv')
```

- This _selects_ the div that has the `id` of `#exampleDiv`
- On its own, just selecting the div doesn't really do anything
- But with it selected we can then _do something to or with it_...

---

# `.text()`

- Say we want to use jQuery to change the text inside our `#exampleDiv` div
- We can use jQuery's `text()` function to do that like this

```
$('#exampleDiv').text('Disaster!');
```

- In plain language this says:
  - _Select_ the div with an `id` of `#exampleText`
  - _Set_ its text contents to `'Disaster!'`
- Notice how there's a `.` (period) between the _selection_ function and `text()`? That's how we tell jQuery to apply the text function to that specific selection
- Notice how the information `text()` needs to carry out its work is _inside parentheses_ (in this case the text we want to change to)

---

# So jQuery is a dollar sign?

- You may have noticed that both `$(document).ready()` and `$('#exampleDiv')` start with a `$`
- That `$` effectively _is jQuery_
- 90% of the time we'll see":
  - `$` to say "Hey, jQuery!"
  - Then parentheses with a CSS selector inside them to say "select _this_ part of the page"
  - Then a period to say "now listen to what I want you to do to it..."
  - Then a function (like `text()`) to tell jQuery what to do

```
$('#exampleDiv').text('Disaster!');
```

---

# Class selectors

- So far we've only selected by `id` selectors, but you can select with a `class` selector too, using the CSS notation you're used to
- If we apply exactly the same code with a different selector like this...

```
$('.exampleClass').text('Disaster!');
```
--
- Then we see that _all_ the elements on that page have the `text()` function applied to them!

---

# That's jQuery in a nutshell!

- You _select_ one or more elements on the page with `$('insert selector here')`
  - Like `$('.exampleClass')`
- And you call a jQuery _function_ on those elements after a `.`
  - Like `$('.exampleClass').text('Disaster!')`

---

# There's more though, right?

- jQuery would be kind of underwhelming if all it did was let you change the text of elements on your page
- And fortunately jQuery is _not_ underwhelming
- Along with `text()` there are many, _many_ other functions we can use to do things with our webpages
- You can find a full list at http://api.jquery.com
- But for now, let's meet some more of them

---

# `css()`

- One of the most popular things to do with jQuery is to change the CSS applied to a specific element
- We can do this with the `css()` function like this:

```
$('.exampleClass').css({
  color: 'red',
  fontSize: '10em',
  backgroundColor: 'yellow'
});
```

- Note that we list the CSS properties to set _inside curly brackets_
- Note that it's _similar to CSS notation __but not identical___
- What are the differences?

---

# `css()`

```
$('.exampleClass').css({
  color: 'red',
  fontSize: '10em',
  backgroundColor: 'yellow'
});
```

- Property values are written in _quote marks_
- Properties are separated by _commas_ (not semicolons)
- Property names _cannot have hyphens_ so we we either

  - Write them with a capital letter where the hyphen would go:
     - `backgroundColor` instead of `background-color`
  - Or write them inside quote marks to use the hyphen:
     - `'background-color'` instead of `background-color`

---

# `addClass()`

- Another way to manipulate the CSS of elements on a page is to add CSS classes to them dynamically
- In jQuery we can use `addClass()` on a selection to specify a CSS class to apply to it

```
$('.exampleClass').addClass('red');
```

- __Note__ a weird trap: in `addClass()` you _don't_ use the period in front of the class name like you would for a selector - it's `red` not `.red`

---

# `removeClass()`

- If you can add a class you should be able to remove a class!
- And you can with `removeClass()`

```
$('.exampleClass').removeClass('bold');
```

---

# `toggleClass()`

- It might be very useful to be able to switch a class on an off on an element
- That is, turn it on if it's off and turn it off if it's on
- We can do that with `toggleClass()`

```
$('.exampleClass').toggleClass('bold');
```

- (This is a little harder to see right now because it all happens on page load.)
- (We'll get to triggering these things with input soon.)

---

# `val()`

- We can use `val()` to set the text inside an input field like this

```
$('#exampleInput').val('Hello, World!');
```

- `val()` stands for _value_ as you might imagine
- We will see later that we can also use `val()` to _get_ the value a user types into an input field, too!

---

# Events

- Before we learn more jQuery functions to affect elements on a page, we need to learn about _events_ because they're what really make things interesting
- An _event_ on a webpage is when _something happens_
- There are lots of events and you can read the list of events jQuery recognises here: http://api.jquery.com/category/events/
- But for now, let's just focus on the _mouse_
- In essence, we would like to _do things to the page in response to the user's mouse_

---

# Listening to events

- In order to _react_ to an event, we need to be _listening_ for it to happen
- With jQuery it's very easy to tell the webpage we want to listen for specific events with the `on()` function
- So if we wanted to change the color of a div when it's clicked, we could write

```
$('.exampleClass').on('click',function () {
  $('.exampleClass').css({
    color: 'red'
  })
});
```

---

# Breaking down `on()`

```
$('.exampleClass').on('click',function () {
  // Do this when .exampleClass is clicked
});
```

- First we _select_ the element(s) on the page we want to react to
--

- Then we call the `on()` function to say we want to react to an event when it happens to that selection (this is called _listening_ to the event)
--

- In the parentheses of `on()` we tell it what _kind_ of event to listen to in quote marks (in this case it is `'click'`, meaning a mouse click)
--

- Then we add a comma to say there's more information coming
--

- Then we write a _function_ to say what to do when the event happens
--

- It's a lot, I know.
--
 We _will_ get used to it.

---

# `this` one, not that one

- Did you notice how when we clicked on _any_ of the `.exampleClass` divs, they _all_ had the new CSS applied to them?
- That might be what we wanted, but what if we only wanted _the one we clicked_ to be affected?
- We can do that, and to do so we use the magic word `this`:

```
$('.exampleClass').on('click',function () {
  $(this).css({
    color: 'red'
  })
});
```

- In this situation, `this` refers to "the thing the event happens to"
- So we can _select_ that specific element represented by `this` and apply the CSS only to that

---

# More mouse events

- That was the `click` event, but we can replace `click` with other words to listen to other events, like
  - `mouseover` (happens when the mouse enters the element)
  - `mouseout` (happens when the mouse leaves the element)
  - `mousedown` (happens when the mouse button goes down)
  - `mouseup` (happens when the mouse button goes up)
  - `dblclick` (happens when the mouse is double-clicked)
- The power is yours!

---

# `val()` again

- Earlier I said that `val()` can _set_ the content of an input field, but that it can also _read_ the value of an input field
- If we just write `$('#exampleInput').val()` it will _give back_ the contents of the selected input field
- We could _use_ that somewhere else...

```
$('#exampleButton').on('click',function() {
  $('#exampleDiv').text($('#exampleInput').val());
});
```

- So here we're saying "When I click the button, take the result of `$('#exampleInput').val()` and put it in the _text_ of `#exampleDiv`"
- Mind-bending?

---

# Okay, that's a lot

- We've seen a lot now!
- We can:
  - Change the CSS of any element on the page (with `css()`)
  - Change the text of any element on the page (with `text()`)
  - Change the value in an input field (with `val()`)
  - Listen to events happening on any element (with `on()`) and do any of the above things to them when it happens
  - Use `this` to affect only the specific element that was the target of an event
- But let's learn a few more nice jQuery functions...

---

# `hide()`

- You can make any element invisible with jQuery:

```
$('.exampleClass').hide();
```

- Now it's gone!
- It's the equivalent of setting `display` to `none` in CSS

---

# `hide()` on click

```
$('.exampleClass').on('click',function () {
  $('.exampleClass').hide();
});
```

---

# Using our button to `show()` it again

```
$('.exampleClass').on('click',function () {
  $('.exampleClass').hide();
});

$('#exampleButton').on('click',function () {
  $('.exampleClass').show();
});
```

---

# Switching between hide and show with `toggle()`

```
$('#exampleButton').on('click',function () {
  $('.exampleClass').toggle();
});
```

- `toggle()` swaps the selected element between being visible and invisible, making it the opposite of whatever it was when `toggle()` was called

---

# Fancy hiding and showing with `slideUp()` and `slideDown()`

```
$('.exampleClass').on('click',function () {
  $('.exampleClass').slideUp();
});

$('#exampleButton').on('click',function () {
  $('.exampleClass').slideDown();
});
```

---

# Toggling the slide with `slideToggle()`

```
$('#exampleButton').on('click',function () {
  $('.exampleClass').slideToggle();
});
```

---

# And there's also `fadeIn()`, `fadeOut()`, and `fadeToggle()`

```
$('#exampleButton').on('click',function () {
  $('.exampleClass').fadeToggle();
});
```

---

# And then there's also `animate()`

- jQuery has a powerful animation function that lets you specify a target set of CSS properties and have it animate a selected element to them

```
$('#exampleButton').on('click',function () {
  $('.exampleClass').animate({
    fontSize: '10em'
  },1000);
});
```

- First we write the CSS properties in curly brackets (in this case we want the font size to become `10em`)
- Then after a comma we write how many milliseconds it should take (in this case `1000` milliseconds or one second)

---

# `animate()` and color

- Weirdly in the base version of jQuery you can't use `animate()` with any property based on colour!
- You have to use another library called jQuery UI, which you can also find the appropriate  `<link>` (for CSS) and `<script>` tags for at https://developers.google.com/speed/libraries/

```
<link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/smoothness/jquery-ui.css">
<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
```

- Note that you need to add this _after_ the `<script>` tag for jQuery

---

# `animate()` and color

- Now we can animate with colour (well, `color` technically):

```
$('#exampleButton').on('click',function () {
  $('.exampleClass').animate({
    color: 'red'
  },1000);
});
```

---

# Cumulative animation

- We can also create animations that can be applied cumulatively!
- If we wanted the font size to go up by one `em` with each click:

```
$('#exampleButton').on('click',function () {
  $('.exampleClass').animate({
    fontSize: '+=1em'
  },1000);
});
```

- So we use `+=` and then the amount to add by animation (this works for any number)
- (We can use `-=` if we want it to get smaller by that amount)

---

# Whoa.

- That, my friends, is jQuery
- You _select_ elements on the page with CSS selectors
- You _apply jQuery functions_ to them that might change their appearance or content
- You _listen for events_ to make things happen in reaction to the user

---

# One last thing for now

- Now that we're programming, things can go really wrong
- We need to be able to see what went wrong if we're going to be able to fix it
- The most basic way to do this is to look at the _JavaScript Console_ while we're working
- In Chrome you can bring it up with `View > Developer > JavaScript Console`
- When your page is broken, you'll likely see some red text here that's _trying_ to tell you what the problem is

---

# Some broken code

```
$('#exampleButton').on('click',function () {
  $('.exampleClass').anamate({
    fontSize: '+=1em'
  },1000);
});
```

- If we put this into our `script.js` and look at the JavaScript Console we see

```
Uncaught TypeError: $(...).anamate is not a function
```

- Which is telling us that page doesn't know what `anamate` is, which is because we had a typo in our function name
- Generally speaking the messages will try to be helpful, but bear in mind they _won't always be_

---

# Some broken code that's harder to fix

```
$('#exampleButton').on('click',function () {
  $('.exampleClass').animate({
    fontSize: '+=1em'
  },1000);
);
```

- We've missed a curly bracket at the end there
- The error message is `Uncaught SyntaxError: Unexpected token )`
- Note how it _tells us the line number_ though, which at least gives us somewhere to look

---

# Some broken code that's much harder to fix

```
$('#exampleButton').on('click',function () {
  $('.exampleClas').animate({
    fontSize: '+=1em'
  },1000);
});
```
--

- We mistyped the class selector
- The page doesn't care, there is no message in the JavaScript Console
- It just _doesn't work_
--

- On the plus side, we know _what_ is not working (it's not animating when we click), so we at least know roughly where to look for the problem
- Then we get out our fine-toothed comb

---

class: middle

# Take a breath. It's okay. Are you okay?

--

- Want to look at some more examples?
--

- https://github.com/pippinbarr/dart450-2018/tree/master/examples/week02/
- Or we can also try to build something (simple!) from scratch?

---

# Studio and beyond!

- [Exercise 01](https://github.com/pippinbarr/dart450-2018/wiki/Exercise-01)
- [Exercise 02](https://github.com/pippinbarr/dart450-2018/wiki/Exercise-02), due next week
- [Midterm Project](https://github.com/pippinbarr/dart450-2018/wiki/Midterm-Project)
- Next week we're going to start on the fundamentals of JavaScript programming with _variables_
