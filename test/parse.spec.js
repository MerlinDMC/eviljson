var EVIL = require('../');

var mocha = require('mocha');
var expect = require('chai').expect;

describe('Parse', function () {
  it('should parse numbers', function () {
    expect(EVIL.parse('123')).to.equal(123);
    expect(EVIL.parse('-123')).to.equal(-123);
    expect(EVIL.parse('0')).to.equal(0);
  });

  it('should parse strings', function () {
    expect(EVIL.parse('"test"')).to.equal('test');
    expect(EVIL.parse('"Hello World!"')).to.equal('Hello World!');
  });

  it('should parse lists', function () {
    expect(EVIL.parse('[1,2]')).to.deep.equal([1,2]);
    expect(EVIL.parse('[1,"test",2]')).to.deep.equal([1,'test',2]);
  });

  it('should parse objects', function () {
    expect(EVIL.parse('{"a":1,"b":2}')).to.deep.equal({a: 1, b: 2});
  });

  describe('Compatibility', function () {
    it('should match the JSON.parse behaviour', function () {
      var tests = [
        'null', 'true', 'false',
        '1', '2', '-3', '123',
        '"test"', '"Hello World!"',
        '[1,2,3]', '[1,"test",2]',
        '{"a":1,"b":2}', '{"a":1,"b":[2,3]}'
      ];

      tests.forEach(function (test) {
        expect(EVIL.parse(test)).to.deep.equal(JSON.parse(test));
      });
    });
  });
});
