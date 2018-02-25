class: middle

# DART 450 | Web Intervention | Week 07
## Hearing voices

---

class:middle
# On libraries

---

# Reuse is King

- Programming is time-consuming and complicated
- But fortunately, it's also true that _other people_ have often done part of what we need to do
- And we can _reuse_ their labour to make faster progress on our own work
- This tends to come in three flavours
  - `View Source`
  - Help sites
  - Libraries and Plugins

---

# View Source, or "Your Browser Is Here to Help"

- We can use `View Source` in a browser to uncover the JavaScript (and HTML and CSS) that is creating the experience on that page
- This is a great trick for getting a sense of how particular effects are being achieved or at least what libraries and plugins are being used
- But it's also very often incomprehensible, not commented, and sometimes obfuscated to prevent you from taking the work
- A lot of the time it's even badly done!
- __Verdict:__ It's well worth using view source to get a clue to how something is being done, but it's rarely going to help us in terms of actual code

---

# Help sites, or "The Internet Is Here to Help"

- Sites like stackexchange.com and stackoverflow.com are forums dedicated to people asking their hyper-specific programming question and having it answered by someone more experienced
- Because the internet is enormous, it's exceedingly common for someone to have _already asked your exact question_ and for that question to have _received an answer_
- This is amazing because you often get an explanation as well as sample code for how to achieve something
- But it's also true that sometimes the answers are arcane, way beyond what you understand, or poorly written in some way
- __Verdict:__ If you _understand_ the answer, help sites are fantastic, but if you don't it can be a major risk to just try to cut and paste the code into your own work

---

# Libraries, or "Programmers Are Here to Help"

- In the best case scenario, someone has not only already done the kind of thing you want to do but has _packaged it into a library_
- The great thing about libraries is that they are specifically _designed_ to be used by other people
- Also great is that you can consider "designing backwards" from libraries by finding a library with an interesting effect and thinking about how you might use it
- But like any programming, libraries can still be hard to understand, particularly if they're not well documented
- __Verdict:__ Libraries are the pinnacle of code reuse and can give us programming superpowers even as beginner programmers

---

# But how do I use a library?

- Good question.
- The specifics vary, but there's a reasonably reliable process you can follow
- Let's try it out...

---

# 1. .hi[Find a library you want to use]

- You might hear about a library from a friend, you might do a search on "cool javascript libraries", you might see one references in the `index.html` of a website you're viewing the source of, you might search for a specific thing you want to do like "text to speech javascript"
- For our purposes we're going to imagine we want that last one, a text to speech library
- We're going to use the first hit on Google, which is a library called [ResponsiveVoice](https://responsivevoice.org/)

---

# 2. .hi[Go to the library's homepage]

- Libraries will pretty much universally have a website associated with them
- Sometimes that will be a fancy-looking site on its own domain, sometimes it will be some person's website with a page about a library they made, sometimes it will be a repository somewhere like github.com
- There's no standard for this, but we're all good at using the internet, so we should be okay
- So we're going to go to the ResponsiveVoice homepage

https://responsivevoice.org

---

# 3. .hi[Learn in general about the library]

- We want to know what the library does, so we should read whatever description or example the homepage provides us with
- In particular, at this point we should be making sure that it either does what we want, or at least that it sounds like fun to play around it
- Examples are particularly helpful, of course, since you can actually get a sense of the thing working
- In the case of ResponsiveVoice, there's both description and an example. Looks cool.

---

# 4. .hi[Find instructions for getting the library set up]

- Almost any library will include instructions for getting it set up in your project
- But of course we need to be prepared for things to be kind of obtuse sometimes
- And we need to at least be able to understand the basic ideas involved, such as needing a `<script>` tag to include the library itself, and then also potentially needing some template code in your own script before using the library's functions
- ResponsiveVoice has some pretty straightforward 'get up and running' instructions on the front page... so...

---

# 5. .hi[Follow the setup instructions]

- Before we can do anything fancy with a library, we should follow the basic setup instructions and make sure we can get it working
- If we don't already have a project we're working on, we should create a simple blank website and insert the library into that
- So for ResponsiveVoice, let's set up the basic elements in a blank template...
--

- ... it works!

---

# 5b. .hi[Get the library working with your `script.js`]

- Some libraries give their most basic example using only HTML-oriented examples (like ResponsiveVoice)
- It's worth making sure that you can get the simplest version of the library working using your own `script.js` file instead
- In the case of ResponsiveVoice we can see there's a specific line of JavaScript embedded in the `<input>` of their example
- We can figure out that this is the line that makes the voice speak, right?
- So let's put that into our `script.js` instead...

---

# 6. .hi[Find examples and documentation]

- Most libraries won't just have a basic setup example, they'll have extensive documentation that tells you _everything_ the library can do
- Sometimes they will also have little examples of each kind of thing the library does
- Be aware that the documentation is not always easy to understand
- Note that the documentation is often called the libraries __API__ (Application Programming Interface)
- Take it slow, ask for help
- With ResponsiveVoice we have a relatively painless amount of documentation along with a bunch of examples, so let's try some out through cutting and pasting...

---

# 7. .hi[Design!]

- Now you’ve got the library working, and you know about its possibilities
- This is the point at which you will begin to see how the library can be applied to your problem/idea if you already had one in mind
- Or you can start thinking about how to actually design or make something based on it.
- This is where it actually starts to be fun.
- Personally, I’m a strong believer in designing from the possibilities of a technology - that is, being guided by what you see the library can do

---

# annyang!

- Let's repeat the process we just followed for another library
- This time let's think about speech in the opposite direction
- _annyang!_ is a library that uses browsers' speech to text functionality to let you give _commands_ to a webpage

https://www.talater.com/annyang/

---

# JavaScript Audio

- Just to round things out, let's quickly learn how to just play audio files on our webpage
- It's surprisingly straightforward, fortunately
- We make an _Audio Object_ and give it a filename for an audio file
- And then we tell it to play

```
// Create a variable to store the audio (based on a file)
var muzak = new Audio('sounds/muzak.mp3');
// Play it!
muzak.play();
```

- Naturally we would need a `sounds` folder in our project and a `muzak.mp3` file in that folder!

---

# JavaScript Audio Object

- There's documentation for this Audio Object online
- https://www.w3schools.com/jsref/dom_obj_audio.asp
- Here we can see, for instance, that we can make sounds loop, and we can pause them...

```
// Create a variable to store the audio (based on a file)
var muzak = new Audio('sounds/muzak.wav');
// Set it to loop
muzak.loop = true;
// Play it!
muzak.play();

$(document).on('click',function () {
  // Pause the muzak if the page is clicked
  muzak.pause();
});
```
