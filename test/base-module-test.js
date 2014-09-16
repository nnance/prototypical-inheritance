'use strict';

var expect = require('chai').expect;
var BaseModule = require('../base-module');

describe('Library Module', function(){
  var baseModule;
  beforeEach(function(){
    baseModule = new BaseModule('http://dev.api.com');
  });

  describe('When accessing the module', function(){
    it('the module function should not be available', function(){
      expect(BaseModule.getUrl).to.not.exist;
    });
    it('the private function should not be available', function(){
      expect(BaseModule.getEnvironment).to.not.exist;
    });
  });

  describe('When accessing the instance', function(){
    it('the public function should be available', function(){
      expect(baseModule.getUrl).to.exist;
    });
    it('the private function should not be available', function(){
      expect(baseModule.getEnvironment).to.not.exist;
    });
    it('the testable private function should be available', function(){
      expect(baseModule.getBaseUrl).to.exist;
    });
    it('should return the new value', function(){
      expect(baseModule.getBaseUrl()).to.contain('dev.');
    });
  });

  describe('When creating a second instance of the base module', function(){
    var secondModule;
    beforeEach(function(){
      secondModule = new BaseModule();
    });
    // notice how our secondModule has changed the baseModule
    // proving that the module is instances are shared
    it('the base url should be reset', function(){
      expect(secondModule.getBaseUrl()).to.not.contain('dev.');
    });
  });
});
