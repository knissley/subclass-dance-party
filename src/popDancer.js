var makePopDancer = function(top, left, timeBetweenSteps) {
  //object creation
  makeDancer.call(this, top, left, timeBetweenSteps);

  //add a class of pop-dancer to the jQuery element
  this.$node.addClass('pop-dancer');

  //insert an <img> inside the jQuery element with src of jim_carrey.png
  this.$node.prepend($('<img>', {id: 'popImg', src: './assets/img/jim_carrey.png'}));
};

makePopDancer.prototype = Object.create(makeDancer.prototype);
makePopDancer.prototype.constructor = makePopDancer;

makePopDancer.prototype.step = function() {
  //make the scale of the element get bigger and smaller
  makeDancer.prototype.step.call(this);

  // decide how we want this dancer to step
  // some css property moving between states
  this.$node.toggle({ effect: 'scale', direction: 'horizontal'});
  // this.$node.toggle();
};