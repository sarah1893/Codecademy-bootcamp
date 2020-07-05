console.log = function() {};
const assert = require('chai').assert;
const fs = require('fs');
const Structured = require('structured');

const code = fs.readFileSync('public/main.js', 'utf8');

describe('', function () {
  it('', function() {

    let structureOne = function() {
      let context = {
        languages: []
      };
    };

    let isMatchOne = Structured.match(code, structureOne);

    assert.isOk(isMatchOne, 'Did you assign a key of `languages` and a value of an empty array to `context`?');
  });
});