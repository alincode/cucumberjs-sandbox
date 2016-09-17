var chai = require('chai');
chai.should();

module.exports = function() {

  this.Given(/^height is "([^"]*)"$/, function(height) {
    this.height = +height;
  });

  this.Given(/^weight is "([^"]*)"$/, function(weight) {
    this.weight = +weight;
  });

  this.When(/^calculator add two number$/, function() {
    this.result = this.weight / (this.height * this.height)
  });

  this.Then(/^result should be "([^"]*)"$/, function(result) {
    this.result.toFixed(1).should.be.equal(result);
  });

};
