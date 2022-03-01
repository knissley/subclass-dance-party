describe('popDancer', function() {
  var popDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    popDancer = new makePopDancer(20, 30, timeBetweenSteps);
  });

  // is the dancer being created?
  it('should have the correct jQuery node', function() {
    expect(popDancer.$node).to.be.an.instanceOf(jQuery);
  });
  // is it doing the movement we tell it to?
  it('should change its scale', function() {
    sinon.spy(popDancer.$node, 'toggle');
    popDancer.step();
    expect(popDancer.$node.toggle.called).to.be.true;
  });
  it('should have a class of pop-dancer', function() {
    var classList = popDancer.$node.attr('class');
    expect(classList.includes('pop-dancer')).to.be.true;
  });
  // check that the step schedule is working correctly(frequency)?
  describe('dance', function() {
    it('should check that the step function is called at least once per second', function() {
      sinon.spy(popDancer, 'step');
      expect(popDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps);
      expect(popDancer.step.callCount).to.be.equal(1);
      clock.tick(timeBetweenSteps);
      expect(popDancer.step.callCount).to.be.equal(2);
    });
  });


  // test if it's position is set correctly by line up button
});