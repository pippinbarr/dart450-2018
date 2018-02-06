/**********************************************

DART 450, Winter 2018
Simple Database
Pippin Barr

A very simple example of using an array of objects
to create a kind of database experience

**********************************************/

// A database of people with names, ages, and job titles
var database = [
  {
    name: 'Don Quixote',
    age: 88,
    job: 'Knight'
  },
  {
    name: 'T-1000',
    age: -11,
    job: 'Terminator'
  },
  {
    name: 'Alicia Keys',
    age: 37,
    job: 'Musician'
  },
  {
    name: 'Artemis',
    age: NaN,
    job: 'Godess of the Hunt'
  }
];

$(document).ready(function () {

  // Run through our database array and add each entry to our page
  for (var i = 0; i < database.length; i++) {
    // Create a p element for each field in the current entry
    $name = $('<p></p>').text('Name: ' + database[i].name);
    $age = $('<p></p>').text('Age: ' + database[i].age);
    $job = $('<p></p>').text('Job: ' + database[i].job);
    // Create a div for the overall entry
    $entry = $('<div></div>');
    // Append each p element to the div
    $entry.append($name);
    $entry.append($age);
    $entry.append($job);
    // Add the entry to the page itself in the body
    $('body').append($entry);
  }

});
