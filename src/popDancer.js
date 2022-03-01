var makePopDancer = function(top, left, timeBetweenSteps) {
  //object creation
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('pop-dancer');
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