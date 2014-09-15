'use strict';

var expect = require('chai').expect;
var _ = require('underscore');

// constructor
var Config = function(){
  // instance variable
  this.environment = 'test';
};

Config.prototype = {
    // instance function
    getEnvironment: function() {
      return this.environment;
    }
};

// constructor
var ProductionConfig = function(){};
// subclass from the Config base class
ProductionConfig.prototype = Object.create(Config.prototype);
// extend the base class with additional functions
_.extend(ProductionConfig.prototype, {
  getBaseUrl: function() {
    return 'http://api.production.io';
  }
});
// override instance value
ProductionConfig.prototype.environment = 'production';

describe('When subClass is created', function(){
  var prodConfig;
  before(function(){
    prodConfig = new ProductionConfig();
  });
  it('should exist', function(){
    expect(prodConfig).to.exist;
  });
  it('should inherit from baseClass',function(){
    expect(prodConfig instanceof Config).to.be.true;
  });
  it('should have the environment set to production', function(){
    expect(prodConfig.getEnvironment()).to.equal('production');
  });
  it('should have new getBaseUrl function', function(){
    expect(prodConfig.getBaseUrl).to.exist;
  });
  it('should have a base url with production', function(){
    expect(prodConfig.getBaseUrl()).to.contain('production');
  });
});
