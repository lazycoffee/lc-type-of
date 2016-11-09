var typeOf = require('../index');
var assert = require('assert');

describe('#type of', function() {
    var varNull = null;
    var varUndefined = undefined;
    var varArray = [1, 2];
    var varNumber = 12.34;
    var varNAN = NaN;
    var varObject = {};
    var varFunction = function(){};
    var varBoolean = true;
    var varString = '';
    var varRegexp = /a-z/;
    var varError = new ReferenceError;
    var varDate = new Date;
    var varMath = Math;
    it('null', function() {
        return assert.equal('null', typeOf(varNull));
    });
    it('undefined', function() {
        return assert.equal('undefined', typeOf(varUndefined));
    });
    it('array', function() {
        return assert.equal('array', typeOf(varArray));
    });
    it('number', function() {
        return assert.equal('number', typeOf(varNumber));
    });
    it('NaN', function() {
        return assert.equal('number', typeOf(varNAN));
    });
    it('object', function() {
        return assert.equal('object', typeOf(varObject));
    });
    it('function', function() {
        return assert.equal('function', typeOf(varFunction));
    });
    it('boolean', function() {
        return assert.equal('boolean', typeOf(varBoolean));
    });
    it('string', function() {
        return assert.equal('string', typeOf(varString));
    });
    it('regexp', function() {
        return assert.equal('regexp', typeOf(varRegexp));
    });
    it('error', function() {
        return assert.equal('error', typeOf(varError));
    });
    it('date', function() {
        return assert.equal('date', typeOf(varDate));
    });
    it('math', function() {
        return assert.equal('math', typeOf(varMath));
    });
});
