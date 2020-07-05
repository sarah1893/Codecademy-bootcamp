console.log = function() {};
const { assert } = require('chai');
const fs = require('fs');
const Structured = require('structured');

const code = fs.readFileSync('main.js', 'utf8');

describe('', function () {
  it('', function() {
    let structureOne = function() {
    	close.addEventListener();
    };

    let structureTwo = function() {
      close.addEventListener($event);
    };

    let structureThree = function() {
      close.addEventListener($event, textReturn);
    };

   let varCallbacks = [
      function($event){
        if($event.value !== 'click'){
          return {failure: 'Did you pass in an argument of a `\'click\'` in the `.addEventListener()` method?'};
        }
        return true
      }
    ]

    let isMatchOne = Structured.match(code, structureOne);

    let isMatchTwo = Structured.match(code, structureTwo, {varCallbacks});
    let isMatchThree = Structured.match(code, structureThree, {varCallbacks});
    // let isMatchFour = Structured.match(code, structureFour);
    // let isMatchFive = Structured.match(code, structureFive);

    assert.isOk(isMatchOne , 'Did you add the `.addEventListener()` method to the `close` element?');
    assert.isOk(isMatchTwo , varCallbacks.failure || 'Did you add the event type to the `.addEventListener()` method of the `close` element?');
    assert.isOk(isMatchThree , varCallbacks.failure || 'Did you add the event handler function to the `.addEventListener()` method of the `close` element?' );


  });
});