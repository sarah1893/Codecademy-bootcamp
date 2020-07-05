console.log = function() {};
const { assert } = require('chai');
const fs = require('fs');
const Structured = require('structured');

const code = fs.readFileSync('main.js', 'utf8');

describe('', function () {
  it('', function() {
    let structureOne = function() {
      let down
    };
    let structureTwo = function() {
      let down = function() {
      }
    };
    let structureThree = function() {
      let down = function() {
        ball
      }
    };
    let structureFour = function() {
      let down = function() {
        ball.style
      }
    };
    let structureFive = function() {
      let down = function() {
        ball.style.bottom
      }
    };
    let structureSix = function() {
      let down = function() {
        ball.style.bottom = '50px';
      };
    };
    
    let structureSeven = function() {
      const down
    };
    let structureEight = function() {
      const down = function() {
      }
    };
    let structureNine = function() {
      const down = function() {
        ball
      }
    };
    let structureTen = function() {
      const down = function() {
        ball.style
      }
    };
    let structureEleven = function() {
      const down = function() {
        ball.style.bottom
      }
    };
    let structureTwelve = function() {
      const down = function() {
        ball.style.bottom = '50px';
      };
    };
    
    let isMatchOne = Structured.match(code, structureOne);
    let isMatchTwo = Structured.match(code, structureTwo);
    let isMatchThree = Structured.match(code, structureThree);
    let isMatchFour = Structured.match(code, structureFour);
    let isMatchFive = Structured.match(code, structureFive);
    let isMatchSix = Structured.match(code, structureSix);
    let isMatchSeven = Structured.match(code, structureSeven);
    let isMatchEight = Structured.match(code, structureEight);
    let isMatchNine = Structured.match(code, structureNine);
    let isMatchTen = Structured.match(code, structureTen);
    let isMatchEleven = Structured.match(code, structureEleven);
    let isMatchTwelve = Structured.match(code, structureTwelve);

    assert.isOk(isMatchOne, 'Did you create a variable named `down`?');
    assert.isOk(isMatchTwo, 'Did you assign a function to the `down` variable?');
    assert.isOk(isMatchThree, 'Did you call the `ball` element in the `down` function?');
    assert.isOk(isMatchFour, 'Did you access the `.style` property of the `ball` element?');
    assert.isOk(isMatchFive, 'Did are you modifying the `bottom` style property of the `ball` element?');
    assert.isOk(isMatchSix, 'Did set the `bottom` property of the `ball` element equal to `\'50\'`?');
    assert.isOk(isMatchSeven, 'Did you create a variable named `down`?');
    assert.isOk(isMatchEight, 'Did you assign a function to the `down` variable?');
    assert.isOk(isMatchNine, 'Did you call the `ball` element in the `down` function?');
    assert.isOk(isMatchTen, 'Did you access the `.style` property of the `ball` element?');
    assert.isOk(isMatchEleven, 'Did are you modifying the `bottom` style property of the `ball` element?');
    assert.isOk(isMatchTwelve, 'Did set the `bottom` property of the `ball` element equal to `\'50\'`?');

  });
});