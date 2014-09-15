'use strict';

var _ = require('underscore');
var Config = require('./base-class');

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

module.exports = ProductionConfig;
