'use strict';

var expect = require('chai').expect;
var Config = require('../base-class');

describe('When creating a new instance of a config class', function(){
  var config;
  before(function(){
    config = new Config();
  });
  it('should exist', function(){
    expect(config).to.exist;
  });
  it('should return test as the environment', function(){
    expect(config.getEnvironment()).to.equal('test');
  });
  it('the static function should not be accessable', function(){
    expect(config.getBaseUrl).to.not.exist;
  });
});

describe('When accessing the static class', function(){
  it('the static function should be accessable on the class', function(){
    expect(Config.getBaseUrl).to.exist;
  });
  it('this static variable should not be accesable', function(){
    expect(Config.staticBase).to.not.exist;
  });
  it('the static baseUrl should contain static', function(){
    expect(Config.getBaseUrl()).to.contain('static');
  });
});
