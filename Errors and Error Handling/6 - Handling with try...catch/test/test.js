console.log = function () { }
const { expect } = require('chai')
const rewire = require('rewire');
const fs = require('fs');

describe('', function () {
  it('', function () {
    let appModule;
    try {
      appModule = rewire("../main.js")
    } catch (e) {
      expect(true, "Seems like you're getting an thrown error, add a `try..catch` statement inside your function to handle the error.").to.equal(false);
    }

    let capAllElements
    try {
      capAllElements = appModule.__get__("capAllElements");
    } catch (e) {
      expect(true, 'Please don\'t remove the `capAllElements` function.').to.equal(false);
    }
    expect(capAllElements, 'Please don\'t remove the `capAllElements` function.').to.be.a('function')

    // test that an array passed in works as intended
    let sampleArr = ['a', 'b', 'c'];
    capAllElements(sampleArr);
    expect(sampleArr, '`capAllElements()` should capitalize each element of the array passed in.').to.deep.equal(['A', 'B', 'C'])

    // hijack the console.log()
    const logged = [];
    const consoleMock = {
      console: {
        log: (...args) => logged.push(...args)
      }
    }
    appModule.__set__(consoleMock);

    // make sure that calling the function won't break/throw uncaught err
    try {
      capAllElements('break this thing');
    } catch (e) {
      expect(true, 'Did you put the entire method call of `arr.forEach(...)` in the `try` block of a `try...catch` statement?').to.equal(false);
    }

    // caught error should do intended job
    expect(logged.length > 0, 'In your `catch` block did you add the `console.log()` statement?').to.be.true;
    expect(logged[0], 'In your `catch` block, do you log the error to the console?').to.be.an('error')
  });
});
