console.log = function() {};
const { assert } = require('chai');
const fs = require('fs');
const Structured = require('structured');

const code = fs.readFileSync('main.js', 'utf8');

describe('', function () {
  it('', function() {
    let structureOne = function() {
			text
    };
    let structureTwo = function() {
			text.innerHTML
    };

    let isMatchOne = Structured.match(code, structureOne);
    let isMatchTwo = Structured.match(code, structureTwo);
    
    assert.isOk(isMatchOne , 'Did you access the `.innerHTML` of the `text`	element?');
    assert.isOk(isMatchTwo , 'Did you change the text by assigning a string featuring the `.timeStamp` property to the `text`	element with the `.innerHTML` property?');

  });
});