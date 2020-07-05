console.log = function() {};
const assert = require('chai').assert;
const fs = require('fs');
const Structured = require('structured');

const code = fs.readFileSync('public/main.js', 'utf8');

describe('', function () {
  it('', function() {

    let structureOne = function() {
      let context = {
        flavor: $flavor
      }
    };

    varCallbacks = [
      function($flavor){
        if ($flavor.value === 'vanilla'){
          return {failure: 'Did you re-assign the flavor property of `context`?'}
        }
        if ($flavor.value !== 'chocolate'){
          return {failure: 'Did you re-assign the value of the `flavor` property of `context` to `\'chocolate\'`?'}
        }
        return true
      }
    ]

    let isMatchOne = Structured.match(code, structureOne, { varCallbacks });

    assert.isOk(isMatchOne, varCallbacks.failure || 'Did you assign the value of the flavor `property` in `context` to `\'chocolate\'`?');
  });
});
