// This file creates the subclass of a blinkyDancer
// a BlinkyDancer has all the same properties of a dancer but has a .step function that invokes the original .step and also toggles the display of the dancer to create a blinking effect


var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  // call makeDancer but bind this to be this
  // this = object.create(makeBlinkyDancer.prototype)
  makeDancer.call(this, top, left, timeBetweenSteps);
};

// refer back to and access superclass
makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;


//new .step functino for blinkyDancers, which needs access to the original .step
makeBlinkyDancer.prototype.step = function() {
  //  We needed to overwrite the .step function originally found on makeDancer's prototype in order to use here,
  //  but also needed to still access the original .step so we could get the stepping schedule running

  //invoke the old version of step and bind this to the blinkyDancer instance
  makeDancer.prototype.step.call(this);

  // make the dancer blink by toggling the span element
  this.$node.toggle();
};







/*
ORIGINAL CODE

var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  var blinkyDancer = makeDancer(top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  var oldStep = blinkyDancer.step;

  blinkyDancer.step = function() {
    // call the old version of step at the beginning of any call to this new version of step
    oldStep();
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    blinkyDancer.$node.toggle();
  };

  return blinkyDancer;
};
*/

