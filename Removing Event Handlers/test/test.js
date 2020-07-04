console.log = function() {};
const { assert } = require('chai');
const fs = require('fs');
const Structured = require('structured');

const code = fs.readFileSync('main.js', 'utf8');

describe('', function () {
  it('', function() {
    let structureOne = function() {
      lock.addEventListener($event, function(){
        door.removeEventListener();
      });
    };

    let structureTwo = function() {
      lock.addEventListener($event, function(){
        door.removeEventListener($event);
      });
    };

    let structureThree = function() {
      lock.addEventListener($event, function(){
        door.removeEventListener($event, openDoor);
      });
    };

   let varCallbacks = [
      function($event){
        if($event.value !== 'click'){
          return {failure: 'Did you pass in an argument of a `\'click\'` in both the event listener methods?'};
        }
        return true
      }
    ]

    let isMatchOne = Structured.match(code, structureOne);
    let isMatchTwo = Structured.match(code, structureTwo, {varCallbacks});
    let isMatchThree = Structured.match(code, structureThree, {varCallbacks});

    assert.isOk(isMatchOne , 'Did you add the `.removeEventListener()` method to the `door` element inside the `lock.addEventListener()` method?');
    assert.isOk(isMatchTwo , varCallbacks.failure || 'Did you add the `.removeEventListener()` method to the `door` element inside the `lock.addEventListener()` method?');
    assert.isOk(isMatchThree , varCallbacks.failure || 'Did you add the `.removeEventListener()` method to the `door` element inside the `lock.addEventListener()` method?' );
  });
});