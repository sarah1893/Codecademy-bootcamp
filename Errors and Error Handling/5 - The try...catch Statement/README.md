# The try...catch Statement

Up to this point, thrown errors have caused our program to stop running. But, we have the ability anticipate and *handle* these errors by writing code to address the error and allow our program to continue running.

In JavaScript, we use `try...catch` statement to anticipate and handle errors. Take a look at example below:

```
try {
  throw Error('This error will get caught');
} catch (e) {
  console.log(e);
}
// Prints: This error will get caught

console.log('The thrown error that was caught in the try...catch statement!');
// Prints: 'The thrown error that was caught in the try...catch statement!'
```

Now, let’s break down what happened in the `try...catch` statement above:

- We have code that follows `try` inside curly braces `{}` known as the *`try`* block.

- Inside the `try` block we insert code that we anticipate might throw an error.

- Since we want to see what happens if an error is thrown in the `try` block, we throw an error with the message `'This error will get caught'`.

- Following the `try` block is the `catch` statement which accepts the thrown error from the `try` block . The `e` represents the thrown error.

- The curly braces that follow `catch(e)` is known as the *catch block* and contains code that executes to handle the error.

- Since the error is caught, our `console.log()` after the try...catch statement prints `'The thrown error that was caught in the try...catch statement!'`.

Generally speaking, in a `try...catch` statement, we evaluate code in the `try` block and if the code throws an error, the code inside the `catch` block will handle the error for us. The provided example just showcases how a `try...catch` statement works because we know an error is being thrown. Let’s first practice writing our own `try...catch` statement and afterwards we will go over a more practical usage of `try...catch`.