console.log = function() {};
const assert = require('chai').assert;
const fs = require('fs');
const Structured = require('structured');

const code = fs.readFileSync('public/main.js', 'utf8');

describe('', function () {
  it('', function() {

    let structureOne = function() {
      let context = {
        opinion: true
      }
    };

    let structureTwo = function() {
      let context = {
        opinion: false
      }
    };
    
    let structureThree = function() {
      context.opinion = false;
    }

    let isMatchOne = Structured.match(code, structureOne);
    let isMatchTwo = Structured.match(code, structureTwo);
    let isMatchThree = Structured.match(code, structureThree);

		assert.isNotOk(isMatchOne && !isMatchThree, 'Did you re-assign the value of the `opinion` property in `context`?');
    assert.isOk(isMatchTwo || isMatchThree, 'Did you assign the value of the `opinion` property in `context` to false?');
  });
});
