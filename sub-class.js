'use strict';

var _ = require('underscore');
var Config = require('./base-class');

// constructor
var ProductionConfig = function(url){
  // Call the parent constructor, making sure (using Function#call)
  // that "this" is set correctly during the call
  Config.call(this, url);

  // override instance value
  this.environment = 'production';
};
// subclass from the Config base class
ProductionConfig.prototype = Object.create(Config.prototype);

// Set the "constructor" property to refer to ProductionConfig
ProductionConfig.prototype.constructor = ProductionConfig;

// extend the base class with additional functions
_.extend(ProductionConfig.prototype, {
  getBaseUrl: function() {
    return 'http://api.production.io';
  }
});

module.exports = ProductionConfig;
