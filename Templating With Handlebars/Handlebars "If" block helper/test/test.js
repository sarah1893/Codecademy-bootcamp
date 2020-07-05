console.log = function() {};
const assert = require('chai').assert;
const fs = require('fs');
const Structured = require('structured');

const code = fs.readFileSync('public/main.js', 'utf8');

describe('', function () {
  it('', function() {

    let structureOne = function() {
      const debateElement = _
      debateElement.innerHTML
    };

    let structureTwo = function() {
      debateElement.innerHTML = compiledHtml
    };

    let isMatchOne = Structured.match(code, structureOne);
    let isMatchTwo = Structured.match(code, structureTwo);

    assert.isOk(isMatchOne, 'Did you assign the `innerHTML` of `debateElement` after you initialized `debateElement`?');
    assert.isOk(isMatchTwo, 'Did you assign the `innerHTML` of `debateElement` to `compiledHtml`?');
  });
});
