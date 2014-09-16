'use strict';

module.exports = function(base){

  // private variables
  var environment = 'TEST';
  var testBase = base ? base : 'http://localhost:8080/api';
  var baseUrl;

  // private functions
  var getEnvironment = function() {
    return environment;
  };

  var getBaseUrl = function() {
    if (baseUrl) {
      return baseUrl;
    } else if (getEnvironment() === process.env.NODE_ENV) {
      return testBase;
    }
  };

  // public functions
  module.getUrl = function() {
    return getBaseUrl() + '/users';
  };

  module.setBaseUrl = function(value) {
    baseUrl = value;
  };

  // make private functions testable
  if (process.env.NODE_ENV === 'TEST') {
    module.getBaseUrl = getBaseUrl;
  }

  return module;
};
