# Constructing an Error

JavaScript errors are objects that have a name and message property. Previously, we’ve seen how built-in errors alert us about common mistakes in our code. But, what if we need an error message that isn’t covered by the built-in errors? Let’s say we need to inform a user that a string passed in as an argument is too short with a custom message. Such a message isn’t covered by a built-in error, but we could use the `Error` function to make our own error object with a message that is unique to our program!

console.log(Error('Your password is too weak.'));
// Prints: Error: Your password is too weak.
The Error function takes an argument of a string which becomes the value of the error’s message property. In the code snippet above, we used the Error function to create an error object that has the message 'Your password is too weak.'.

You might also see errors created with the new keyword. Both methods will lead to the same functionality. Take a look:

console.log(new Error('Your password is too weak.'));
// Prints: Error: Your password is too weak.
Keep in mind that creating an error is not the same as throwing an error. A thrown error will cause the program to stop running. We cover how to throw our created errors in the next exercise!