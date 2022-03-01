var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  // call makeDancer but bind this to be this
  // this = object.create(makeBlinkyDancer.prototype)
  makeDancer.call(this, top, left, timeBetweenSteps);

  // var blinkyDancer = new makeDancer(top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  // we're going to make a new step function on this constructor
  // but we want to call the one on makeDancer

  // call original when blinkyDancer is first made
  // put a new step on the prototype of makeBlinkyDancer

  // declare oldStep to be a reference
  // call the step made on dancer
  // grabbing a reference to the step function from the superclass
  // might use oldStep on every subclass

  // need to make a way for blinkyDancer to always access the step function of dancer

  // need to overwrite blinkyDancers step
};

// refer back to and access superclass
makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;


makeBlinkyDancer.prototype.step = function() {
  //invoke the old version of step
  makeDancer.prototype.step.call(this);

  // throws error when first element in the argument is undefined --> callback must be provided to timer calls

  // find a way to access the old version of step directly

  // make the dancer blink by toggling the span element

  // this toggle is causing display: none on dancers
  // only calling toggle once
  this.$node.toggle();
};

/*
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

