// This file puts the dancer spans onto the DOM, by running the constructor and using Math.random() to randomize the top and left positions as well as the timeBetweenSteps variable

// potential bug: dancer can appear on the header (constrict this in some way?)

$(document).ready(function() {
  window.dancers = []; //use this to access every dancer

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */

    // grab the desired dancer constructor from the dancer-maker-function-name attribute on the button element
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name'); // makeBlinkyDancer

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });

  // new event handler for lineup
  //set a variable we can change, this will be used for the dancer's position
  var newLeftPosition = 50;
  $('.line-up').on('click', function(event) {
    // when clicked
    // iterate over dancers array
    console.log('line-up is triggering');
    window.dancers.forEach(function(currentDancer) {
      currentDancer.setPosition(currentDancer.top, 50);
    });
    // set each dancer left property or top prop to same value
  });

});

