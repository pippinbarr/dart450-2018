/*

Gibber Basic
Pippin Barr

Sets up and plays a simple drum loop and bass line.

Uses:

Gibber.lib
http://charlie-roberts.com/gibber/gibber-lib-js/

*/


$(document).ready(function() {

  // Set up our drums
  setupInstruments();

});


// setupInstruments ()
//
// Sets up a random drum loop and a bass line
function setupInstruments () {

  // Initialise Gibber
  Gibber.init();

  // Create our drums loop, at 1/8 note length
  // x = kick
  // o = snare
  // * = hihat closed
  // - = hihat open (I think?)
  // . = nothing
  var drums = EDrums('x.o.x*o.x.oxx-o.',1/8);
  var bassSynth = Mono('bass').note.seq( [0,7], 1/8 )
}
