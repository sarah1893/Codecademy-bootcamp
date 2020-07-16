# Debugging Overview

Any programmer will tell you that it is incredibly common to be making great progress working through a coding problem when all of a sudden an error like this gets thrown at you:

```
/home/ccuser/workspace/learn-javascript-debugging-code/app.js:1
"my_name".capitalize();
          ^

TypeError: "my_name".capitalize is not a function
...
```

Alternatively, you might have finally finished implementing a complex function only to find it doesn’t work at all as you expected:

```
console.log('The square root of 4 is ' + squareRoot(4));
=> 'The square root of 4 is 1.87878787'
```

If any of these things happen to you, don’t fret! In our article Thinking About Errors Differently in Your Code, you discovered that these experiences are normal for all developers, no matter how experienced they are. A key skill developers possess is knowing how to debug their code when issues occur.

This lesson will build on that article, demonstrating how to implement those skills in real-life JavaScript situations. If you haven’t had a chance to read the article yet, we highly encourage you to do so right now.

Alright, are you ready to begin your transition from frustrated coder to bug squasher extraordinaire? Let’s get started!


# Error Handling Review

Great job with handling errors!

In this lesson we went over:

- How mistakes in programming leads to errors.
- Why errors are useful for developers.
- Errors will prevent a program from executing unless it is handled.
- How to create an error using the  `Error()` function.
- How to throw an error object using the `throw` keyword.
- How to use the `try...catch` statement to handle thrown errors.
- Evaluating code in a try block to anticipate errors.
- Catching the error in a catch block to allow our program to continue running.
- Why the `try...catch` statement would be useful in a program.

Now you have the ability to create code that doesn’t break when an error is thrown!