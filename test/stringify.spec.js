var EVIL = require('../');

var mocha = require('mocha');
var expect = require('chai').expect;

describe('Stringify', function () {
  it('should encode numbers', function () {
    expect(EVIL.stringify(123)).to.equal('123');
    expect(EVIL.stringify(-123)).to.equal('-123');
    expect(EVIL.stringify(0)).to.equal('0');
  });

  it('should encode strings', function () {
    expect(EVIL.stringify('test')).to.equal('"test"');
    expect(EVIL.stringify('Hello World!')).to.equal('"Hello World!"');
  });

  it('should encode lists', function () {
    expect(EVIL.stringify([1,2])).to.equal('[1,2]');
    expect(EVIL.stringify([1,'test',2])).to.equal('[1,"test",2]');
  });

  it('should encode objects', function () {
    expect(EVIL.stringify({a: 1, b: 2})).to.equal('{"a":1,"b":2}');
  });

  describe('Compatibility', function () {
    it('should match the JSON.stringify behaviour', function () {
      var tests = [
        null, true, false,
        1, 2, 3, 123,
        'test', 'Hello World!',
        [1,2,3], [1,'test',2],
        {a:1,b:2}, {a:1,b:[2,3]}
      ];

      tests.forEach(function (test) {
        expect(EVIL.stringify(test)).to.equal(JSON.stringify(test));
      });
    });
  });
});
