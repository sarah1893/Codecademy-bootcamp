# The throw Keyword

Creating an error doesn’t cause our program to stop — remember, an error must be thrown for it to halt the program.

To throw an error in JavaScript, we use the `throw` keyword like so:

```
throw Error('Something wrong happened');
// Error: Something wrong happened
```

When we use the `throw` keyword, the error is thrown and code after `throw` statement will not execute. Take for example:

```
throw Error('Something wrong happened');
// Error: Something wrong happened

console.log('This will never run');
```

After `throw Error('Something wrong happened');` is executed and the error object is thrown, the `console.log()` statement will not run (just like when a built-in JavaScript error was thrown!).

In the next lesson we will cover how to handle an error so that the rest of our code can run!