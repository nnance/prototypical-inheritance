'use strict';

// private variables
var environment = 'TEST';
var testBase = 'http://localhost:8080/api';
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
var getUrl = function() {
  return getBaseUrl() + '/users';
};

var setBaseUrl = function(value) {
  baseUrl = value;
};

exports.getUrl = getUrl;
exports.setBaseUrl = setBaseUrl;

if (process.env.NODE_ENV === 'TEST') {
  exports.getBaseUrl = getBaseUrl;
}
