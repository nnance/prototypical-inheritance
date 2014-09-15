'use strict';

// constructor
var Config = function(){
  // instance variable
  this.environment = 'test';
};

// static function
Config.getBaseUrl = function() {
    var config = new Config();
    return config.staticBase;
};

Config.prototype = {
    // static variable
    staticBase: 'http://localhost:8080/static',

    // instance function
    getEnvironment: function() {
      return this.environment;
    }
};

// make this file loadable via commonjs / node
module.exports = Config;
