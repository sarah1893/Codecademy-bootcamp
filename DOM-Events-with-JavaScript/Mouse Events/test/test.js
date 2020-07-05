console.log = function() {};
const { assert } = require('chai');
const fs = require('fs');
const Structured = require('structured');

const code = fs.readFileSync('main.js', 'utf8');

describe('', function () {
  it('', function() {
    let structureOne = function() {
      itemOne.onmouseover
    };
    
    let isMatchOne = Structured.match(code, structureOne);

    assert.isOk(isMatchOne, 'Did you create an event handler property with the `mouseover` event type on `itemOne`?');

  });
});