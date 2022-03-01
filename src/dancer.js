//This file is the main dancer superclass
//It contains the step function that sets up the stepping schedule for every dancer type
//It sets the random position of any dancer that uses this constructor
//It gives every dancer a DOM element (span w/ class of dancer) --- does this need to become a different class for other dancers?


var makeDancer = function(top, left, timeBetweenSteps) {
  //this = Object.create(makeDancer.prototype);
  // {} and make its prototype delegate to the passed in object
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;

  // use jQuery to create an HTML <span> tag
  // node will be the element itself
  this.$node = $('<span class="dancer"></span>');

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote:

  // start moving immediately
  this.step();

  // set the position to some random default point within the body
  this.setPosition(top, left);
};


makeDancer.prototype.step = function() {
  // this sets up a schedule for all subsequent subclasses to follow
  var outside = this;
  setTimeout(function() {
    outside.step();
  }, this.timeBetweenSteps);
};

makeDancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};





//ORIGIN
// Creates and returns a new dancer object that can step

// var makeDancer = function(top, left, timeBetweenSteps) {

//   var dancer = {};

//   // use jQuery to create an HTML <span> tag
//   dancer.$node = $('<span class="dancer"></span>');

//   dancer.step = function() {
//     // the basic dancer doesn't do anything interesting at all on each step,
//     // it just schedules the next step
//     setTimeout(dancer.step, timeBetweenSteps);
//   };
//   dancer.step();

//   dancer.setPosition = function(top, left) {
//     // Use css top and left properties to position our <span> tag
//     // where it belongs on the page. See http://api.jquery.com/css/
//     //
//     var styleSettings = {
//       top: top,
//       left: left
//     };
//     dancer.$node.css(styleSettings);
//   };

//   // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
//   // this one sets the position to some random default point within the body
//   dancer.setPosition(top, left);

//   return dancer;
// };
