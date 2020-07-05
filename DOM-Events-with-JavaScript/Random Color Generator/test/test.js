console.log = function() {};
const { assert } = require('chai');
const fs = require('fs');
const Structured = require('structured');

const code = fs.readFileSync('main.js', 'utf8');

describe('', function () {
  it('', function() {
    let structureOne = function() {
      let randomColor = 'rgb(' + rgb(255) + ',' + rgb(255) + ',' + rgb(255) + ')';
    };
    
    let isMatchOne = Structured.match(code, structureOne);

    assert.isOk(isMatchOne , 'Did you add the `randomColor` variable and value to the first line of the `colorChange` function?');
  });
});