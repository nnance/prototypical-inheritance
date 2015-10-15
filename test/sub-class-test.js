'use strict';

var expect = require('chai').expect;
var Config = require('../base-class');
var ProductionConfig = require('../sub-class');

describe('When subClass is created', function(){
  var prodConfig;
  before(function(){
    prodConfig = new ProductionConfig('startup.html');
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
  it('url should contain startup.html', function(){
    expect(prodConfig.getUrl()).to.contain('startup.html');
  });
});
